// import express from 'express';
// import session from 'express-session';
// import passport from 'passport';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import configureDB from './config/db.js';
// import './passport-config.js';

// import usersCltr from './app/controllers/user-cltr.js';
// import authenticateUser from './app/middlewares/authentication.js';
// import { checkSchema } from 'express-validator';
// import { userRegisterSchema, userLoginSchema } from './app/validators/user-validator.js';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3030;

// app.use(express.json());
// app.use(cookieParser());
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false }
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// configureDB();

// app.post('/api/users/register', checkSchema(userRegisterSchema), usersCltr.register);
// app.post('/api/users/login', checkSchema(userLoginSchema), usersCltr.login);
// app.post('/api/users/refresh-token', usersCltr.refreshToken);
// app.get('/api/users/account', authenticateUser, usersCltr.account);

// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect('/api/users/account');
// });

// app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
// app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect('/api/users/account');
// });

// app.get('/logout', (req, res, next) => {
//   req.logout((err) => {
//     if (err) {
//       return next(err);
//     }
//     // Clear the refreshToken cookie
//     res.clearCookie('refreshToken');
//     res.redirect('/');
//   });
// });

// // Define the root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the home page!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


import express from 'express';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import configureDB from './config/db.js';
import './passport-config.js';
import path from 'path';
import jwt from 'jsonwebtoken';

import usersCltr from './app/controllers/user-cltr.js';
import authenticateUser from './app/middlewares/authentication.js';
import { checkSchema } from 'express-validator';
import { userRegisterSchema, userLoginSchema } from './app/validators/user-validator.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

configureDB();

const generateAccessToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

app.post('/api/users/register', checkSchema(userRegisterSchema), usersCltr.register);
app.post('/api/users/login', checkSchema(userLoginSchema), usersCltr.login);
app.post('/api/users/refresh-token', usersCltr.refreshToken);
app.get('/api/users/account', authenticateUser, usersCltr.account);

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  const user = req.user;
  const accessToken = generateAccessToken(user);
  res.cookie('accessToken', accessToken, { httpOnly: true, secure: false, sameSite: 'strict' });
  res.redirect('/');
});

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  const user = req.user;
  const accessToken = generateAccessToken(user);
  res.cookie('accessToken', accessToken, { httpOnly: true, secure: false, sameSite: 'strict' });
  res.redirect('/');
});

app.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    // Clear the refreshToken cookie
    res.clearCookie('refreshToken');
    res.redirect('/');
  });
});

// Serve static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Define the login route
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
