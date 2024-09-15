// import jwt from 'jsonwebtoken';

// const authenticateUser = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   //console.log('Auth Header:', authHeader); // Log the authorization header

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ error: 'Unauthorized: No token provided or invalid format' });
//   }

//   const token = authHeader.split(' ')[1];
//   //console.log('Token:', token); // Log the token

//   if (token == null) {
//     return res.status(401).json({ error: 'Unauthorized: No token provided' });
//   }

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) {
//       console.log('Token verification error:', err); // Log the verification error
//       return res.status(403).json({ error: 'Forbidden: Invalid token' });
//     }
//     req.userId = user.userId;
//     next();
//   });
// };

// export default authenticateUser;


import jwt from 'jsonwebtoken';

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided or invalid format' });
  }

  const token = authHeader.split(' ')[1];
  if (token == null) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
    req.userId = user.userId;
    next();
  });
};

export default authenticateUser;
