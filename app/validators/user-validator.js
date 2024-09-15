// import { User } from '../models/user-model.js';

// export const userRegisterSchema = {
//   email: {
//     exists: {
//       errorMessage: 'Email field is required'
//     },
//     notEmpty: {
//       errorMessage: 'Email cannot be empty'
//     },
//     isEmail: {
//       errorMessage: 'Email should be in a valid format'
//     },
//     trim: true,
//     normalizeEmail: true,
//     custom: {
//       options: async (value) => {
//         const user = await User.findOne({ email: value });
//         if (user) {
//           throw new Error('Email is already taken');
//         }
//         return true;
//       }
//     }
//   },
//   password: {
//     exists: {
//       errorMessage: 'Password is required'
//     },
//     notEmpty: {
//       errorMessage: 'Password cannot be empty'
//     },
//     isStrongPassword: {
//       options: {
//         minLength: 8,
//         minLowercase: 1,
//         minUppercase: 1,
//         minNumbers: 1,
//         minSymbols: 1
//       },
//       errorMessage: 'Password must be at least 8 characters long, contain one lowercase letter, one uppercase letter, one number, and one symbol'
//     },
//     trim: true
//   }
// };

// export const userLoginSchema = {
//   email: {
//     exists: {
//       errorMessage: 'Email field is required'
//     },
//     notEmpty: {
//       errorMessage: 'Email cannot be empty'
//     },
//     isEmail: {
//       errorMessage: 'Email should be in a valid format'
//     },
//     trim: true,
//     normalizeEmail: true
//   },
//   password: {
//     exists: {
//       errorMessage: 'Password is required'
//     },
//     notEmpty: {
//       errorMessage: 'Password cannot be empty'
//     },
//     isStrongPassword: {
//       options: {
//         minLength: 8,
//         minLowercase: 1,
//         minUppercase: 1,
//         minNumbers: 1,
//         minSymbols: 1
//       },
//       errorMessage: 'Password must be at least 8 characters long, contain one lowercase letter, one uppercase letter, one number, and one symbol'
//     },
//     trim: true
//   }
// };


import { User } from '../models/user-model.js';

export const userRegisterSchema = {
  email: {
    exists: {
      errorMessage: 'Email field is required'
    },
    notEmpty: {
      errorMessage: 'Email cannot be empty'
    },
    isEmail: {
      errorMessage: 'Email should be in valid format'
    },
    trim: true,
    normalizeEmail: true,
    custom: {
      options: async (value) => {
        try {
          const user = await User.findOne({ email: value });
          if (user) {
            throw new Error('Email is already taken');
          }
        } catch (err) {
          throw new Error(err.message);
        }
        return true;
      }
    }
  },
  password: {
    exists: {
      errorMessage: 'Password is required'
    },
    notEmpty: {
      errorMessage: 'Password cannot be empty'
    },
    isStrongPassword: {
      options: {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      },
      errorMessage: 'Password must be at least 8 characters long, contain one lowercase letter, one uppercase letter, one number, and one symbol'
    },
    trim: true
  }
};

export const userLoginSchema = {
  email: {
    exists: {
      errorMessage: 'Email field is required'
    },
    notEmpty: {
      errorMessage: 'Email cannot be empty'
    },
    isEmail: {
      errorMessage: 'Email should be in valid format'
    },
    trim: true,
    normalizeEmail: true,
  },
  password: {
    exists: {
      errorMessage: 'Password is required'
    },
    notEmpty: {
      errorMessage: 'Password cannot be empty'
    },
    isStrongPassword: {
      options: {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      },
      errorMessage: 'Password must be at least 8 characters long, contain one lowercase letter, one uppercase letter, one number, and one symbol'
    },
    trim: true
  }
};
