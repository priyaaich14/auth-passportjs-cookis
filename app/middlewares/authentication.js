<<<<<<< HEAD
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
=======

import jwt from 'jsonwebtoken';

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  //console.log('Authorization Header:', authHeader);  // Log the header for debugging
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //console.log('Authorization failed: No token or invalid format');
    return res.status(401).json({ error: 'Unauthorized: No token provided or invalid format' });
  }

  const token = authHeader.split(' ')[1];
  //console.log('Extracted Token:', token);  // Log the extracted token
  if (token == null) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log('Token verification failed:', err.message);
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
    req.userId = user.userId;
    next();
  });
};

export default authenticateUser;
>>>>>>> 0b65d09791b8f6b2ead02c3f731145d2f66ce770
