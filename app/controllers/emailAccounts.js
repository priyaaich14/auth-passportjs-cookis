// import Email from '../models/email-model.js';

// export const getEmailCredentials = async (action) => {
//     const emailAccount = await Email.findOne({ action });
//     if (emailAccount) {
//         return { email: emailAccount.email, password: emailAccount.password };
//     }
//     throw new Error(`No email credentials found for action: ${action}`);
// };


import Email from '../models/email-model.js';

export const getEmailCredentials = async (action) => {
    const emailAccount = await Email.findOne({ action });
    if (emailAccount) {
        return { email: emailAccount.email, password: emailAccount.password };
    }
    throw new Error(`No email credentials found for action: ${action}`);
};
