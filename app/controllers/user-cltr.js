// import { User, hashPassword, verifyPassword } from '../models/user-model.js';
// import jwt from 'jsonwebtoken';
// import { validationResult } from 'express-validator';

// const usersCltr = {};

// const generateAccessToken = (user) => {
//   return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
// };

// const generateRefreshToken = async (user) => {
//   const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
//   user.refreshToken = refreshToken;
//   await user.save();
//   return refreshToken;
// };

// usersCltr.register = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   const { email, password } = req.body;
//   try {
//     const hashedPassword = await hashPassword(password);
//     const user = new User({ email, password: hashedPassword });
//     await user.save();
//     const refreshToken = await generateRefreshToken(user);
//     res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: false, sameSite: 'strict' });
//     res.status(201).json({ email: user.email, _id: user._id, createdAt: user.createdAt, updatedAt: user.updatedAt });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// };

// usersCltr.login = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user || !(await verifyPassword(user.password, password))) {
//       return res.status(404).json({ error: 'Invalid email or password' });
//     }
//     const accessToken = generateAccessToken(user);
//     const refreshToken = await generateRefreshToken(user);
//     res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: false, sameSite: 'strict' });
//     res.json({ accessToken });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// };

// usersCltr.account = async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select('-refreshToken'); // Exclude the refreshToken field
//     res.json(user);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// };

// usersCltr.refreshToken = async (req, res) => {
//   const refreshToken = req.cookies.refreshToken;
//   if (!refreshToken) {
//     return res.status(401).json({ error: 'Unauthorized: No refresh token provided' });
//   }

//   try {
//     const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
//     const foundUser = await User.findById(user.userId);
//     if (!foundUser || foundUser.refreshToken !== refreshToken) {
//       return res.status(403).json({ error: 'Forbidden: Invalid refresh token' });
//     }

//     const newAccessToken = generateAccessToken(foundUser);
//     res.json({ accessToken: newAccessToken });
//   } catch (err) {
//     console.log('Refresh token verification error:', err);
//     return res.status(403).json({ error: 'Forbidden: Invalid refresh token' });
//   }
// };

// export default usersCltr;


import { User, hashPassword, verifyPassword } from '../models/user-model.js';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

const usersCltr = {};

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
