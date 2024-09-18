///////////////corrected code w/o auth///////////////////////////////////////

// import { useReducer, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import AuthContext from '../context/AuthContext';
// import axios from 'axios';

// const initialState = {
//     user: null,
//     isLoggedIn: false
// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN_USER': {
//             return { ...state, isLoggedIn: true, user: action.payload }
//         }
//         case 'LOGOUT_USER': {
//             return { ...state, isLoggedIn: false, user: null }
//         }
//         default:
//             return state;
//     }
// }

// function AuthProvider(props) {
//     const navigate = useNavigate();
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const [authError, setAuthError] = useState(null);

//     useEffect(() => {
//         (async () => {
//             if (localStorage.getItem('token')) {
//                 try {
//                     const userResponse = await axios.get('http://localhost:3030/api/users/account', {
//                         headers: { 'Authorization': localStorage.getItem('token') }
//                     });
//                     dispatch({ type: 'LOGIN_USER', payload: userResponse.data });
//                 } catch (err) {
//                     console.error(err);
//                 }
//             }
//         })();
//     }, []);

//     const handleRegister = async (formData) => {
//         try {
//             await axios.post('http://localhost:3030/api/users/register', formData);
//             setAuthError(null);
//             toast('Successfully Registered', { autoClose: 2000 });
//             navigate('/login');
//         } catch (err) {
//             if (err.response && err.response.data.errors) {
//                 setAuthError(err.response.data.errors[0].msg);
//             } else if (err.response && err.response.data.message) {
//                 setAuthError(err.response.data.message);
//             } else {
//                 setAuthError('An error occurred during registration');
//             }
//         }
//     }

//     const handleLogin = async (formData) => {
//         try {
//             const response = await axios.post('http://localhost:3030/api/users/login', formData)
//             if (response.data.accountLockedUntil) {
//                 setAuthError('Account is locked. Try again later.')
//                 return response.data
//             }
//             localStorage.setItem('token', response.data.token)
//             setAuthError(null)
//             toast('Successfully logged in', { autoClose: 2000 })
//             const userResponse = await axios.get('http://localhost:3030/api/users/account', {
//                 headers: { 'Authorization': localStorage.getItem('token') }
//             })
//             dispatch({ type: 'LOGIN_USER', payload: userResponse.data })
//             navigate('/dashboard')
//             return response.data
//         } catch (err) {
//             if (err.response && err.response.data.errors) {
//                 setAuthError(err.response.data.errors[0].msg);
//             } else if (err.response && err.response.data.error) {
//                 setAuthError(err.response.data.error);
//             } else if (err.response && err.response.data.message) {
//                 setAuthError(err.response.data.message);
//             } else {
//                 setAuthError('An error occurred during login');
//             }
//             return err.response?.data;
//         }
//     }

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         dispatch({ type: 'LOGOUT_USER' });
//         toast("Successfully logged out");
//         navigate('/login');
//     }

//     return (
//         <AuthContext.Provider value={{ state, handleRegister, handleLogin, handleLogout, authError, setAuthError }}>
//             {props.children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthProvider;

//////////////////// with oauth ////////////////////////////////////////

import { useReducer,  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import Cookies from 'js-cookie';

const initialState = {
    user: null,
    isLoggedIn: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_USER': {
            return { ...state, isLoggedIn: true, user: action.payload }
        }
        case 'LOGOUT_USER': {
            return { ...state, isLoggedIn: false, user: null }
        }
        default:
            return state;
    }
}

function AuthProvider(props) {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [authError, setAuthError] = useState(null);

    // Function to handle token-based login (used after Google/Facebook login)
    const handleLoginWithToken = async (token) => {
        try {
            const userResponse = await axios.get('http://localhost:3030/api/users/account', {
                headers: { Authorization: `Bearer ${token}` }
            });
            dispatch({ type: 'LOGIN_USER', payload: userResponse.data });
            toast('Successfully logged in');
        } catch (err) {
            console.error('Error during token login:', err);
            setAuthError('Failed to log in with the token');
        }
    };
    const handleRegister = async (formData) => {
        try {
            await axios.post('http://localhost:3030/api/users/register', formData);
            toast('Successfully Registered', { autoClose: 2000 });
            navigate('/login');
        } catch (err) {
            if (err.response && err.response.data.errors) {
                setAuthError(err.response.data.errors[0].msg);
            } else if (err.response && err.response.data.message) {
                setAuthError(err.response.data.message);
            } else {
                setAuthError('An error occurred during registration');
            }
        }
    };
    // Example handleLogin function for regular login
    const handleLogin = async (formData) => {
        try {
            const response = await axios.post('http://localhost:3030/api/users/login', formData);
            const token = response.data.accessToken;  // Ensure you get the token correctly
    
            if (!token) {
                setAuthError('No token received from server');
                console.error('No token received from server');
                return;
            }
    
            // Store token in localStorage or cookies
            localStorage.setItem('token', token);
    
            // Fetch user details using the token
            const userResponse = await axios.get('http://localhost:3030/api/users/account', {
                headers: { 'Authorization': `Bearer ${token}` }  // Send the Bearer token for authentication
            });
    
            // Update context with user data
            dispatch({ type: 'LOGIN_USER', payload: userResponse.data });
            setAuthError(null);
    
            // Redirect to dashboard after successful login
            toast('Successfully logged in', { autoClose: 2000 });
            navigate('/dashboard');
        } catch (err) {
            // Handle login errors
            if (err.response && err.response.data.errors) {
                setAuthError(err.response.data.errors[0].msg);
            } else if (err.response && err.response.data.error) {
                setAuthError(err.response.data.error);
            } else if (err.response && err.response.data.message) {
                setAuthError(err.response.data.message);
            } else {
                setAuthError('An error occurred during login');
            }
            console.error('Error during login:', err);
        }
    };
    

    const handleLogout = () => {
        Cookies.remove('accessToken');
        dispatch({ type: 'LOGOUT_USER' });
        toast('Successfully logged out');
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{ state,handleRegister, handleLogin, handleLoginWithToken, handleLogout, authError, setAuthError }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
