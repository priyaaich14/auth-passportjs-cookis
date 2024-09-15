// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD
//     }
// });

// export default transporter;


// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// export default transporter;


// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const staticTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// export const sendDynamicEmail = async (email, password, mailOptions) => {
//     const dynamicTransporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: email,
//             pass: password
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     });

//     return dynamicTransporter.sendMail(mailOptions);
// };

// export default staticTransporter;


// import nodemailer from 'nodemailer';
// import { getEmailCredentials } from '../controllers/emailAccounts.js';

// export const sendDynamicEmail = async (action, mailOptions) => {
//     const { email, password } = await getEmailCredentials(action);
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: email,
//             pass: password
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     });

//     return transporter.sendMail(mailOptions);
// };

// export default sendDynamicEmail;


import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
})

export const sendEmail = async (mailOptions) => {
    mailOptions.from = process.env.EMAIL 
    return transporter.sendMail(mailOptions)
}

export default sendEmail
