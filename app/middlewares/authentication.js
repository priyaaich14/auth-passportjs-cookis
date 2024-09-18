
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
