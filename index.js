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
