// import jwt from 'jsonwebtoken'

// export default function authenticateUser(req,res,next){
//      const token = req.headers['authorization']
//      if(!token) {
//         return res.status(401).json({ errors : 'token is required'})
//      }
//      try{
//         const tokenData = jwt.verify( token, process.env.JWT_SECRET)
//         req.userId = tokenData.userId
//         next()
//      } catch (err) {
//         return res.status(401).json({ errors : err.message })
//      }
// }


import jwt from 'jsonwebtoken';
import User from '../models/user-model.js';

// Middleware to check if account is locked
export const checkAccountLock = async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        if (user.accountLockedUntil && user.accountLockedUntil > Date.now()) {
            return res.status(403).json({ message: 'Account is locked. Try again later.',accountLockedUntil: user.accountLockedUntil });
        }
    }
    next();
};

// Middleware to remind password update
// export const checkPasswordUpdateReminder = async (req, res, next) => {
//     const user = await User.findById(req.userId);
//     if (user && user.passwordChangedAt) {
//         const passwordAge = Date.now() - new Date(user.passwordChangedAt).getTime();
//         const daysSinceLastUpdate = passwordAge / (1000 * 60 * 60 * 24);

//         if (daysSinceLastUpdate > 30) {
//             return res.status(200).json({ message: 'Please update your password.' });
//         }
//     }
//     next();
// };

export const checkPasswordUpdateReminder = async (req, res, next) => {
    const user = await User.findById(req.userId);
    if (user && user.passwordChangedAt) {
        const passwordAge = Date.now() - new Date(user.passwordChangedAt).getTime();
        const minutesSinceLastUpdate = passwordAge / (1000 * 60);

        if (minutesSinceLastUpdate > 50) {
            return res.status(200).json({ message: 'Please update your password.' });
        }
    }
    next();
};
export default function authenticateUser(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ errors: 'token is required' });
    }
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = tokenData.userId;
        next();
    } catch (err) {
        return res.status(401).json({ errors: err.message });
    }
}
