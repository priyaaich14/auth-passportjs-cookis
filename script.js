// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config()

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// })

// const mailOptions = {
//     from: process.env.EMAIL,
//     to: 'priyaaich17@gmail.com.com', 
//     subject: 'Test Email',
//     text: 'This is a test email sent from Nodemailer.'
// }

// transporter.sendMail(mailOptions, (err, info) => {
//     if (err) {
//         return console.log('Error sending email:', err)
//     }
//     console.log('Email sent:', info.response)
// })
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Email from './app/models/email-model.js';

dotenv.config()

const emailAccounts = [
    {
        email: 'priyaaich17@gmail.com',
        password: 'first-app-password',
        action: 'register'
    },
    {
        email: 'priyaaich17@gmail.com',
        password: 'first-app-password',
        action: 'login'
    },
    {
        email: 'addityapriya@gmail.com',
        password: 'second-app-password',
        action: 'forgotPassword'
    },
    {
        email: 'addityapriya@gmail.com',
        password: 'second-app-password',
        action: 'resetPassword'
    }
]

const addEmailCredentials = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)

        for (const account of emailAccounts) {
            const filter = { email: account.email, action: account.action }
            const update = { email: account.email, password: account.password, action: account.action }
            await Email.findOneAndUpdate(filter, update, { upsert: true })
        }

        console.log('Email credentials added successfully')
        mongoose.connection.close()
    } catch (err) {
        console.error('Error adding email credentials:', err)
        mongoose.connection.close()
    }
}

addEmailCredentials()
