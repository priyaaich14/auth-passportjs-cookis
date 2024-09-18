
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { User } from './app/models/user-model.js';
import dotenv from 'dotenv';

dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).exec();
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3030/auth/google/callback"
},
async (token, tokenSecret, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
      const existingUser = await User.findOne({ email: profile.emails[0].value });
      if (existingUser) {
        user = existingUser;
      } else {
        user = new User({
          googleId: profile.id,
          email: profile.emails[0].value,
          displayName: profile.displayName
        });
        await user.save();
      }
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}
));

// Facebook Strategy
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:3030/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'emails']
},
async (token, tokenSecret, profile, done) => {
  try {
    let user = await User.findOne({ facebookId: profile.id });
    if (!user) {
      const existingUser = await User.findOne({ email: profile.emails[0].value });
      if (existingUser) {
        user = existingUser;
      } else {
        user = new User({
          facebookId: profile.id,
          email: profile.emails[0].value,
          displayName: profile.displayName
        });
        await user.save();
      }
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}
));
