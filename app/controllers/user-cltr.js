<<<<<<< HEAD
// import User from "../models/user-model.js";
// import bcryptjs from 'bcryptjs'
// import jwt from 'jsonwebtoken'
// import { validationResult } from 'express-validator'
// const usersCltr = {}

// usersCltr.register = async (req, res) => {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     const body = req.body 
//     try {
//         const user = new User(body)
//         const salt = await bcryptjs.genSalt()
//         const hash = await bcryptjs.hash(user.password, salt)
//         user.password = hash
//         await user.save()
//         res.status(201).json(user)
//     } catch(err) {
//         console.log(err)
//         res.status(500).json({ error: "something went wrong"})
//     }
// }
// usersCltr.login = async (req, res) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(401).json({ errors: errors.array() })
//     }

//     const { email, password } = req.body
//     try {
//         const user = await User.findOne({ email })  // Corrected: calling findOne on the model itself
//         //console.log(user)
//         if (!user) {
//             return res.status(404).json({ error: 'invalid email or password' })
//         }

//         const isVerified = await bcryptjs.compare(password, user.password)
//         if (!isVerified) {
//             return res.status(404).json({ error: 'invalid email or password' })
//         }

//         const tokenData = { userId: user._id }
//         const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '7d' })
//         res.json({ token: token })
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: 'something went wrong' })
//     }
// }

// usersCltr.account = async (req,res) => {
//     try{
//         const user = await User.findById (req.userId)
//         res.json(user)

//     } catch (err) { 

//         console.log(err)
//         res.status(500).json({ error: 'something went wrong' })
//     }
// }

// export default usersCltr

//////////////////////////////////////////////////////////////////

// import User from "../models/user-model.js";
// import bcryptjs from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { validationResult } from 'express-validator';

// const usersCltr = {}

// usersCltr.register = async (req, res) => {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     const body = req.body
//     try {
//         const user = new User(body)
//         const salt = await bcryptjs.genSalt()
//         const hash = await bcryptjs.hash(user.password, salt)
//         user.password = hash
//         await user.save()
//         res.status(201).json(user)
//     } catch(err) {
//         console.log(err)
//         res.status(500).json({ error: "Something went wrong" })
//     }
// }

// usersCltr.login = async (req, res) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }

//     const { email, password } = req.body
//     try {
//         const user = await User.findOne({ email })
//         if (!user) {
//             return res.status(404).json({ error: 'Email does not exist' })
//         }

//         const isVerified = await bcryptjs.compare(password, user.password)
//         if (!isVerified) {
//             return res.status(400).json({ error: 'Wrong password' })
//         }

//         const tokenData = { userId: user._id }
//         const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '7d' })
//         res.json({ token: token })
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: 'Something went wrong' })
//     }
// }

// usersCltr.account = async (req, res) => {
//     try {
//         const user = await User.findById(req.userId)
//         res.json(user)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: 'Something went wrong' })
//     }
// }

// export default usersCltr




// import transporter from '../controllers/nodemailer.js';
// import { sendDynamicEmail } from '../controllers/nodemailer.js';
// import User from "../models/user-model.js";
// import bcryptjs from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import crypto from 'crypto';
// import { validationResult } from 'express-validator';

// const usersCltr = {};

// usersCltr.register = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const body = req.body;
//     try {
//         const user = new User(body);
//         const salt = await bcryptjs.genSalt();
//         const hash = await bcryptjs.hash(user.password, salt);
//         user.password = hash;
//         await user.save();
//         res.status(201).json(user);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Something went wrong" });
//     }
// };

// usersCltr.login = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ error: 'Email does not exist' });
//         }
//         const isVerified = await bcryptjs.compare(password, user.password);
//         if (!isVerified) {
//             return res.status(400).json({ error: 'Wrong password' });
//         }
//         const tokenData = { userId: user._id };
//         const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '7d' });
//         res.json({ token: token });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// };

// usersCltr.account = async (req, res) => {
//     try {
//         const user = await User.findById(req.userId);
//         res.json(user);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// };

// // usersCltr.forgotPassword = async (req, res) => {
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() });
// //     }
// //     const { email } = req.body;
// //     try {
// //         const user = await User.findOne({ email });
// //         if (!user) {
// //             return res.status(404).json({ error: 'Email does not exist' });
// //         }
// //         const token = crypto.randomBytes(32).toString('hex');
// //         user.resetToken = token;
// //         user.resetTokenExpiration = Date.now() + 900000; // 15 minutes
// //         await user.save();

// //         const mailOptions = {
// //             from: process.env.EMAIL,
// //             to: user.email,
// //             subject: 'Password Reset',
// //             html: `<p>You requested for password reset</p>
// //                    <h5>Click on this <a href="http://localhost:3000/reset-password/${token}">link</a> to reset password</h5>`
// //         };

// //         transporter.sendMail(mailOptions, (err, info) => {
// //             if (err) {
// //                 console.log('Error sending email:', err);
// //                 return res.status(500).json({ error: 'Failed to send email', details: err.message });
// //             }
// //             console.log('Email sent:', info.response);
// //             res.json({ message: 'Reset link sent to your email' });
// //         });
// //     } catch (err) {
// //         console.log('Error processing forgot password:', err);
// //         res.status(500).json({ error: 'Something went wrong' });
// //     }
// // };

// usersCltr.forgotPassword = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { email } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ error: 'Email does not exist' });
//         }
//         const token = crypto.randomBytes(32).toString('hex');
//         user.resetToken = token;
//         user.resetTokenExpiration = Date.now() + 900000; // 15 minutes
//         await user.save();

//         const mailOptions = {
//             from: process.env.EMAIL,
//             to: user.email,
//             subject: 'Password Reset',
//             html: `<p>You requested for password reset</p>
//                    <h5>Click on this <a href="http://localhost:3000/reset-password/${token}">link</a> to reset password</h5>`
//         };

//         // Use dynamic email sending function
//         await sendDynamicEmail(process.env.EMAIL, process.env.EMAIL_PASSWORD, mailOptions);
//         res.json({ message: 'Reset link sent to your email' });
//     } catch (err) {
//         console.log('Error processing forgot password:', err);
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// };


// usersCltr.resetPassword = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { token, newPassword } = req.body;
//     try {
//         const user = await User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } });
//         if (!user) {
//             return res.status(400).json({ error: 'Invalid or expired token' });
//         }
//         const salt = await bcryptjs.genSalt();
//         const hash = await bcryptjs.hash(newPassword, salt);
//         user.password = hash;
//         user.resetToken = undefined;
//         user.resetTokenExpiration = undefined;
//         await user.save();
//         res.json({ message: 'Password reset successfully' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// };

// export default usersCltr;




// import { sendDynamicEmail } from '../config/nodemailer.js';
// import User from "../models/user-model.js";
// import bcryptjs from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import crypto from 'crypto';
// import { validationResult } from 'express-validator';

// const usersCltr = {};

// usersCltr.register = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const body = req.body;
//     try {
//         const user = new User(body);
//         const salt = await bcryptjs.genSalt();
//         const hash = await bcryptjs.hash(user.password, salt);
//         user.password = hash;
//         await user.save();

//         const mailOptions = {
//             from: 'no-reply@example.com', // A generic from address
//             to: user.email,
//             subject: 'Registration Successful',
//             html: `<p>Welcome to our service, ${user.email}</p>`
//         };

//         // Use the action 'register' to select the appropriate email account
//         await sendDynamicEmail('register', mailOptions);

//         res.status(201).json(user);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: "Something went wrong" });
//     }
// };

// usersCltr.login = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ error: 'Email does not exist' });
//         }
//         const isVerified = await bcryptjs.compare(password, user.password);
//         if (!isVerified) {
//             return res.status(400).json({ error: 'Wrong password' });
//         }
//         const tokenData = { userId: user._id };
//         const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '7d' });

//         const mailOptions = {
//             from: 'no-reply@example.com', // A generic from address
//             to: user.email,
//             subject: 'Login Successful',
//             html: `<p>You have successfully logged in, ${user.email}</p>`
//         };

//         // Use the action 'login' to select the appropriate email account
//         await sendDynamicEmail('login', mailOptions);

//         res.json({ token: token });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// };

// usersCltr.account = async (req, res) => {
//     try {
//         const user = await User.findById(req.userId);
//         res.json(user);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// };

// usersCltr.forgotPassword = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { email } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ error: 'Email does not exist' });
//         }
//         const token = crypto.randomBytes(32).toString('hex');
//         user.resetToken = token;
//         user.resetTokenExpiration = Date.now() + 900000; // 15 minutes
//         await user.save();

//         const mailOptions = {
//             from: 'no-reply@example.com', // A generic from address
//             to: user.email,
//             subject: 'Password Reset',
//             html: `<p>You requested for password reset</p>
//                    <h5>Click on this <a href="http://localhost:3000/reset-password/${token}">link</a> to reset password</h5>`
//         };

//         // Use the action 'forgotPassword' to select the appropriate email account
//         await sendDynamicEmail('forgotPassword', mailOptions);
//         res.json({ message: 'Reset link sent to your email' });
//     } catch (err) {
//         console.log('Error processing forgot password:', err);
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// };

// usersCltr.resetPassword = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { token, newPassword } = req.body;
//     try {
//         const user = await User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } });
//         if (!user) {
//             return res.status(400).json({ error: 'Invalid or expired token' });
//         }
//         const salt = await bcryptjs.genSalt();
//         const hash = await bcryptjs.hash(newPassword, salt);
//         user.password = hash;
//         user.resetToken = undefined;
//         user.resetTokenExpiration = undefined;
//         await user.save();

//         const mailOptions = {
//             from: 'no-reply@example.com', // A generic from address
//             to: user.email,
//             subject: 'Password Reset Successful',
//             html: `<p>Your password has been successfully reset, ${user.email}</p>`
//         };

//         // Use the action 'resetPassword' to select the appropriate email account
//         await sendDynamicEmail('resetPassword', mailOptions);

//         res.json({ message: 'Password reset successfully' });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Something went wrong' });
//     }
// };

// export default usersCltr;

////////////////////////////////////////////////////////////////////////


// import { sendEmail } from './nodemailer.js';
// import User from '../models/user-model.js';
// import bcryptjs from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import crypto from 'crypto';
// import { validationResult } from 'express-validator';

// const usersCltr = {}

// usersCltr.register = async (req, res) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     const body = req.body
//     try {
//         const user = new User(body)
//         const salt = await bcryptjs.genSalt()
//         const hash = await bcryptjs.hash(user.password, salt)
//         user.password = hash
//         await user.save()

//         const mailOptions = {
//             to: user.email,
//             subject: 'Registration Successful',
//             html: `<p>Welcome to our service, ${user.email}</p>`
//         }

//         await sendEmail(mailOptions)

//         res.status(201).json(user)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: "Something went wrong" })
//     }
// }

// usersCltr.login = async (req, res) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     const { email, password } = req.body
//     try {
//         const user = await User.findOne({ email })
//         if (!user) {
//             return res.status(404).json({ error: 'Email does not exist' })
//         }
//         const isVerified = await bcryptjs.compare(password, user.password)
//         if (!isVerified) {
//             return res.status(400).json({ error: 'Wrong password' })
//         }
//         const tokenData = { userId: user._id }
//         const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '7d' })

//         const mailOptions = {
//             to: user.email,
//             subject: 'Login Successful',
//             html: `<p>You have successfully logged in, ${user.email}</p>`
//         }

//         await sendEmail(mailOptions)

//         res.json({ token: token })
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: 'Something went wrong' })
//     }
// }

// usersCltr.account = async (req, res) => {
//     try {
//         const user = await User.findById(req.userId)
//         res.json(user)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: 'Something went wrong' })
//     }
// }


// // usersCltr.forgotPassword = async (req, res) => {
// //     const errors = validationResult(req)
// //     if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() })
// //     }
// //     const { email } = req.body
// //     try {
// //         const user = await User.findOne({ email })
// //         if (!user) {
// //             return res.status(404).json({ error: 'Email does not exist' })
// //         }
// //         const token = crypto.randomBytes(32).toString('hex')
// //         user.resetToken = token
// //         user.resetTokenExpiration = Date.now() + 900000;// 15 minutes
// //         await user.save()

// //         const mailOptions = {
// //             to: user.email,
// //             subject: 'Password Reset',
// //             html: `<p>You requested for password reset</p>
// //                    <h5>Click on this <a href="http://localhost:3000/reset-password/${token}">link</a> to reset password</h5>`
// //         }

// //        // console.log(`Sending email to ${user.email} with token: ${token}`) // Add logging

// //         await sendEmail(mailOptions);
// //         res.json({ message: 'Reset link sent to your email' })
// //     } catch (err) {
// //         console.log('Error processing forgot password:', err)
// //         res.status(500).json({ error: 'Something went wrong' })
// //     }
// // }

// // usersCltr.resetPassword = async (req, res) => {
// //     const errors = validationResult(req)
// //     if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() })
// //     }
// //     const { token, newPassword } = req.body
// //     try {
// //         const user = await User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
// //         if (!user) {
// //             return res.status(400).json({ error: 'Invalid or expired token' })
// //         }
// //         const salt = await bcryptjs.genSalt()
// //         const hash = await bcryptjs.hash(newPassword, salt)
// //         user.password = hash
// //         user.resetToken = undefined
// //         user.resetTokenExpiration = undefined
// //         await user.save()

// //         const mailOptions = {
// //             to: user.email,
// //             subject: 'Password Reset Successful',
// //             html: `<p>Your password has been successfully reset, ${user.email}</p>`
// //         }

// //         await sendEmail(mailOptions)

// //         res.json({ message: 'Password reset successfully' })
// //     } catch (err) {
// //         console.log(err)
// //         res.status(500).json({ error: 'Something went wrong' })
// //     }
// // }

// usersCltr.forgotPassword = async (req, res) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     const { email } = req.body
//     try {
//         const user = await User.findOne({ email })
//         if (!user) {
//             return res.status(404).json({ error: 'Email does not exist' })
//         }
//         const token = crypto.randomBytes(32).toString('hex')
//         user.resetToken = token
//         user.resetTokenExpiration = Date.now() + 900000 // 15 minutes
//         await user.save()

//         const mailOptions = {
//             to: user.email,
//             subject: 'Password Reset',
//             html: `<p>You requested for password reset</p>
//                    <h5>Click on this <a href="http://localhost:3000/reset-password/${token}">link</a> to reset password</h5>`
//         }

//         await sendEmail(mailOptions)
//         res.json({ message: 'Reset link sent to your email' })
//     } catch (err) {
//         console.log('Error processing forgot password:', err)
//         res.status(500).json({ error: 'Something went wrong' })
//     }
// }

// usersCltr.resetPassword = async (req, res) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     const { token, newPassword } = req.body
//     try {
//         const user = await User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
//         if (!user) {
//             return res.status(400).json({ error: 'Invalid or expired token' })
//         }
//         const salt = await bcryptjs.genSalt();
//         const hash = await bcryptjs.hash(newPassword, salt)
//         user.password = hash
//         user.resetToken = undefined
//         user.resetTokenExpiration = undefined
//         await user.save()

//         const mailOptions = {
//             to: user.email,
//             subject: 'Password Reset Successful',
//             html: `<p>Your password has been successfully reset, ${user.email}</p>`
//         }

//         await sendEmail(mailOptions)

//         res.json({ message: 'Password reset successfully' })
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: 'Something went wrong' })
//     }
// }

// usersCltr.updatePassword = async (req, res) => {
//     const { currentPassword, newPassword } = req.body
//     try {
//         const user = await User.findById(req.userId)
//         if (!user) {
//             return res.status(404).json({ error: 'User not found' })
//         }

//         const isVerified = await bcryptjs.compare(currentPassword, user.password)
//         if (!isVerified) {
//             return res.status(400).json({ error: 'Current password is incorrect' })
//         }

//         const salt = await bcryptjs.genSalt()
//         const hash = await bcryptjs.hash(newPassword, salt)
//         user.password = hash;
//         await user.save()

//         res.json({ message: 'Password updated successfully' })
//     } catch (err) {
//         console.log('Error updating password:', err);
//         res.status(500).json({ error: 'Something went wrong' })
//     }
// }


// usersCltr.updateEmailCredentials = async (req, res) => {
//     const { action, email, password } = req.body
//     try {
//         const existingEmail = await Email.findOne({ action })
//         if (existingEmail) {
//             existingEmail.email = email
//             existingEmail.password = password
//             await existingEmail.save()
//         } else {
//             const newEmail = new Email({ action, email, password })
//             await newEmail.save()
//         }
//         res.json({ message: 'Email credentials updated successfully' })
//     } catch (err) {
//         console.log('Error updating email credentials:', err)
//         res.status(500).json({ error: 'Something went wrong' })
//     }
// }

// export default usersCltr


////////////////////////////////////////////////////////

import { sendEmail } from './nodemailer.js';
import User from '../models/user-model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
=======

import { User, hashPassword, verifyPassword } from '../models/user-model.js';
import jwt from 'jsonwebtoken';
>>>>>>> 0b65d09791b8f6b2ead02c3f731145d2f66ce770
import { validationResult } from 'express-validator';

const usersCltr = {};

<<<<<<< HEAD
usersCltr.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const body = req.body;
    try {
        const user = new User(body);
        const salt = await bcryptjs.genSalt();
        const hash = await bcryptjs.hash(user.password, salt);
        user.password = hash;
        user.passwordChangedAt = new Date();
        await user.save();

        const mailOptions = {
            to: user.email,
            subject: 'Registration Successful',
            html: `<p>Welcome to our service, ${user.email}</p>`
        };

        await sendEmail(mailOptions);

        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

usersCltr.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'Email does not exist' });
        }

        
        const isVerified = await bcryptjs.compare(password, user.password);
        if (!isVerified) {
            user.failedLoginAttempts += 1;
            if (user.failedLoginAttempts >= 3) {
               // user.accountLockedUntil = new Date(Date.now() + 24 * 60 * 60 * 1000); // Lock for 24 hours
               user.accountLockedUntil = new Date(Date.now() + 2 * 60 * 1000) // Lock for 2 minutes
            }
            await user.save();
            return res.status(400).json({ error: 'Wrong password' });
        }

        user.failedLoginAttempts = 0;
        user.accountLockedUntil = null;
        await user.save();

        const tokenData = { userId: user._id };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '7d' });

        const mailOptions = {
            to: user.email,
            subject: 'Login Successful',
            html: `<p>You have successfully logged in, ${user.email}</p>`
        };

        await sendEmail(mailOptions);

        res.json({ token: token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

usersCltr.account = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

usersCltr.forgotPassword = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'Email does not exist' });
        }
        const token = crypto.randomBytes(32).toString('hex');
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 900000; // 15 minutes
        await user.save();

        const mailOptions = {
            to: user.email,
            subject: 'Password Reset',
            html: `<p>You requested for password reset</p>
                   <h5>Click on this <a href="http://localhost:3000/reset-password/${token}">link</a> to reset password</h5>`
        };

        await sendEmail(mailOptions);
        res.json({ message: 'Reset link sent to your email' });
    } catch (err) {
        console.log('Error processing forgot password:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

usersCltr.resetPassword = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { token, newPassword } = req.body;
    try {
        const user = await User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } });
        if (!user) {
            return res.status(400).json({ error: 'Invalid or expired token' });
        }
        const salt = await bcryptjs.genSalt();
        const hash = await bcryptjs.hash(newPassword, salt);
        user.password = hash;
        user.passwordChangedAt = new Date();
        user.resetToken = undefined;
        user.resetTokenExpiration = undefined;
        await user.save();

        const mailOptions = {
            to: user.email,
            subject: 'Password Reset Successful',
            html: `<p>Your password has been successfully reset, ${user.email}</p>`
        };

        await sendEmail(mailOptions);

        res.json({ message: 'Password reset successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

usersCltr.updatePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isVerified = await bcryptjs.compare(currentPassword, user.password);
        if (!isVerified) {
            return res.status(400).json({ error: 'Current password is incorrect' });
        }

        const salt = await bcryptjs.genSalt();
        const hash = await bcryptjs.hash(newPassword, salt);
        user.password = hash;
        user.passwordChangedAt = new Date();
        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (err) {
        console.log('Error updating password:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

usersCltr.updateEmailCredentials = async (req, res) => {
    const { action, email, password } = req.body;
    try {
        const existingEmail = await Email.findOne({ action });
        if (existingEmail) {
            existingEmail.email = email;
            existingEmail.password = password;
            await existingEmail.save();
        } else {
            const newEmail = new Email({ action, email, password });
            await newEmail.save();
        }
        res.json({ message: 'Email credentials updated successfully' });
    } catch (err) {
        console.log('Error updating email credentials:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export default usersCltr;

=======
const generateAccessToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

const generateRefreshToken = async (user) => {
  const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
  user.refreshToken = refreshToken;
  await user.save();
  return refreshToken;
};

usersCltr.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }
    const hashedPassword = await hashPassword(password);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    const refreshToken = await generateRefreshToken(user);
    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: false, sameSite: 'strict' });
    res.status(201).json({ email: user.email, _id: user._id, createdAt: user.createdAt, updatedAt: user.updatedAt });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

usersCltr.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await verifyPassword(user.password, password))) {
      return res.status(404).json({ error: 'Invalid email or password' });
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);
    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: false, sameSite: 'strict' });
    res.json({ accessToken });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

usersCltr.account = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

usersCltr.refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ error: 'Unauthorized: No refresh token provided' });
  }

  try {
    const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const foundUser = await User.findById(user.userId);
    if (!foundUser || foundUser.refreshToken !== refreshToken) {
      return res.status(403).json({ error: 'Forbidden: Invalid refresh token' });
    }

    const newAccessToken = generateAccessToken(foundUser);
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    console.log('Refresh token verification error:', err);
    return res.status(403).json({ error: 'Forbidden: Invalid refresh token' });
  }
};

export default usersCltr;
>>>>>>> 0b65d09791b8f6b2ead02c3f731145d2f66ce770
