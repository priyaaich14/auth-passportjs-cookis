<<<<<<< HEAD
// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'
// import configureDB from '../user-auth/config/db.js'
// import { checkSchema } from 'express-validator'
// import usersCltr from './app/controllers/user-cltr.js'
// import authenticateUser from './app/middlewares/authentication.js'
// import { userRegisterSchema , userLoginSchema} from './app/validators/user-validator.js'
// import notesCltr from './app/controllers/notes-cltr.js'
// dotenv.config()
// const app = express()
// const port = process.env.PORT || 3090
// app.use(express.json())
// app.use(cors())
// configureDB()


// app.post('/api/users/register', checkSchema(userRegisterSchema), usersCltr.register)
// app.post('/api/users/login',checkSchema(userLoginSchema),usersCltr.login)
// app.get('/api/users/account',authenticateUser,usersCltr.account)
// //app.post('/api/users/forgot-password', usersCltr.forgotPassword) // Forgot password route
// //app.post('/api/users/reset/:token', usersCltr.resetPassword) // Reset password route

// app.get('/api/notes',authenticateUser,notesCltr.list)
// app.post('/api/notes',authenticateUser,notesCltr.create)
// app.get('/api/notes/:id',authenticateUser,notesCltr.show)
// app.put('/api/notes/:id',authenticateUser,notesCltr.update)
// app.delete('/api/notes/:id',authenticateUser,notesCltr.delete)



// app.listen(port,() =>{
//     console.log('port running on port',port)
// })



// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import configureDB from '../user-auth/config/db.js';
// import { checkSchema } from 'express-validator';
// import usersCltr from './app/controllers/user-cltr.js';
// import authenticateUser from './app/middlewares/authentication.js';
// import { userRegisterSchema, userLoginSchema, forgotPasswordSchema, resetPasswordSchema } from './app/validators/user-validator.js';
// import notesCltr from './app/controllers/notes-cltr.js';

// dotenv.config();
// const app = express();
// const port = process.env.PORT || 3090;
// app.use(express.json());
// app.use(cors());
// configureDB();

// app.post('/api/users/register', checkSchema(userRegisterSchema), usersCltr.register);
// app.post('/api/users/login', checkSchema(userLoginSchema), usersCltr.login);
// app.get('/api/users/account', authenticateUser, usersCltr.account);
// app.post('/api/users/forgot-password', checkSchema(forgotPasswordSchema), usersCltr.forgotPassword);
// app.post('/api/users/reset-password', checkSchema(resetPasswordSchema), usersCltr.resetPassword);
// app.get('/api/notes', authenticateUser, notesCltr.list);
// app.post('/api/notes', authenticateUser, notesCltr.create);
// app.get('/api/notes/:id', authenticateUser, notesCltr.show);
// app.put('/api/notes/:id', authenticateUser, notesCltr.update);
// app.delete('/api/notes/:id', authenticateUser, notesCltr.delete);

// app.listen(port, () => {
//     console.log('Server running on port', port);
// });


// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import configureDB from '../user-auth/config/db.js';
// import { checkSchema } from 'express-validator';
// import usersCltr from './app/controllers/user-cltr.js';
// import authenticateUser from './app/middlewares/authentication.js';
// import { userRegisterSchema, userLoginSchema, forgotPasswordSchema, resetPasswordSchema } from './app/validators/user-validator.js';
// import notesCltr from './app/controllers/notes-cltr.js';

// dotenv.config();
// const app = express();
// const port = process.env.PORT || 3090;
// app.use(express.json());
// app.use(cors());
// configureDB();

// app.post('/api/users/register', checkSchema(userRegisterSchema), usersCltr.register);
// app.post('/api/users/login', checkSchema(userLoginSchema), usersCltr.login);
// app.get('/api/users/account', authenticateUser, usersCltr.account);
// app.post('/api/users/forgot-password', checkSchema(forgotPasswordSchema), usersCltr.forgotPassword);
// app.post('/api/users/reset-password', checkSchema(resetPasswordSchema), usersCltr.resetPassword);

// // Route to update email credentials
// app.post('/api/admin/update-email-credentials', usersCltr.updateEmailCredentials);

// app.get('/api/notes', authenticateUser, notesCltr.list);
// app.post('/api/notes', authenticateUser, notesCltr.create);
// app.get('/api/notes/:id', authenticateUser, notesCltr.show);
// app.put('/api/notes/:id', authenticateUser, notesCltr.update);
// app.delete('/api/notes/:id', authenticateUser, notesCltr.delete);

// app.listen(port, () => {
//     console.log('Server running on port', port);
// });


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import configureDB from './config/db.js'; 
import { checkSchema } from 'express-validator';
import usersCltr from './app/controllers/user-cltr.js'; 
import authenticateUser,{ checkAccountLock, checkPasswordUpdateReminder } from './app/middlewares/authentication.js'; 
import { userRegisterSchema, userLoginSchema, forgotPasswordSchema, resetPasswordSchema } from './app/validators/user-validator.js'; // Ensure correct path
import notesCltr from './app/controllers/notes-cltr.js'; 
dotenv.config()
const app = express()
const port = process.env.PORT || 3090
app.use(express.json())
app.use(cors())
configureDB()

app.post('/api/users/register', checkSchema(userRegisterSchema), usersCltr.register)
app.post('/api/users/login', checkSchema(userLoginSchema),checkAccountLock, checkPasswordUpdateReminder, usersCltr.login)
app.get('/api/users/account', authenticateUser, usersCltr.account)
app.post('/api/users/forgot-password', checkSchema(forgotPasswordSchema), usersCltr.forgotPassword)
app.post('/api/users/reset-password', checkSchema(resetPasswordSchema), usersCltr.resetPassword)
app.post('/api/users/update-password', authenticateUser, usersCltr.updatePassword)
// Route to update email credentials
app.post('/api/admin/update-email-credentials', usersCltr.updateEmailCredentials)

app.get('/api/notes', authenticateUser, notesCltr.list)
app.post('/api/notes', authenticateUser, notesCltr.create)
app.get('/api/notes/:id', authenticateUser, notesCltr.show)
app.put('/api/notes/:id', authenticateUser, notesCltr.update)
app.delete('/api/notes/:id', authenticateUser, notesCltr.delete)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
=======
////////////////////////////corrected passportw/o fe///////////////////////////////
// import express from 'express';
// import session from 'express-session';
// import passport from 'passport';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import configureDB from './config/db.js';
// import './passport-config.js';
// import path from 'path';
// import jwt from 'jsonwebtoken';

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

// const generateAccessToken = (user) => {
//   return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
// };

// app.post('/api/users/register', checkSchema(userRegisterSchema), usersCltr.register);
// app.post('/api/users/login', checkSchema(userLoginSchema), usersCltr.login);
// app.post('/api/users/refresh-token', usersCltr.refreshToken);
// app.get('/api/users/account', authenticateUser, usersCltr.account);

// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
//   const user = req.user;
//   const accessToken = generateAccessToken(user);
//   res.cookie('accessToken', accessToken, { httpOnly: true, secure: false, sameSite: 'strict' });
//   res.redirect('/');
// });

// app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
// app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
//   const user = req.user;
//   const accessToken = generateAccessToken(user);
//   res.cookie('accessToken', accessToken, { httpOnly: true, secure: false, sameSite: 'strict' });
//   res.redirect('/');
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

// // Serve static files
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, 'public')));

// // Define the root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the home page!');
// });

// // Define the login route
// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'login.html'));
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


//////////////////////// with fe implemented////////////////////

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import configureDB from './config/db.js';
import './passport-config.js';
import cors from 'cors';
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

// Enable CORS for requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from the React frontend
  credentials: true                 // Allow cookies to be sent across domains
}));

const generateAccessToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

// API Routes
app.post('/api/users/register', checkSchema(userRegisterSchema), usersCltr.register);
app.post('/api/users/login', checkSchema(userLoginSchema), usersCltr.login);
app.post('/api/users/refresh-token', usersCltr.refreshToken);
app.get('/api/users/account', authenticateUser, usersCltr.account);
// Google OAuth Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }), (req, res) => {
  const user = req.user;
  //console.log('google user',user)
  const accessToken = generateAccessToken(user);
  //console.log('Google Login AccessToken:', accessToken);
  res.cookie('accessToken', accessToken, { httpOnly: false, secure: false, sameSite: 'lax'  });

  // Redirect to frontend dashboard after successful login
  //res.redirect('http://localhost:3000/dashboard');
  res.redirect(`http://localhost:3000/login?token=${accessToken}`);
});

// Facebook OAuth Routes
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000/login' }), (req, res) => {
  const user = req.user;
  //console.log('facebook user',user)
  const accessToken = generateAccessToken(user);
  //console.log('Facebook Login AccessToken:', accessToken);
  res.cookie('accessToken', accessToken, { httpOnly: false, secure: false, sameSite: 'lax'  });

  // Redirect to frontend dashboard after successful login
  //res.redirect('http://localhost:3000/dashboard');
  res.redirect(`http://localhost:3000/login?token=${accessToken}`);
});

app.get('/logout', (req, res, next) => {
  req.logout((err) => {
      if (err) {
          return next(err);
      }

      // Destroy the session
      req.session.destroy((err) => {
          if (err) {
              console.error('Failed to destroy session:', err);
          }

          // Clear the accessToken cookie
          res.clearCookie('accessToken');
          res.clearCookie('connect.sid');  // Clear the session cookie

          // Redirect to login page
          res.redirect('http://localhost:3000/login');  // Redirect to the React frontend login page
      });
  });
});

// Start the backend server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
>>>>>>> 0b65d09791b8f6b2ead02c3f731145d2f66ce770
