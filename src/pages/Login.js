// import { useState, useContext } from 'react' 
// import AuthContext from '../context/AuthContext'

// export default function Login(){
//     const { handleLogin} = useContext(AuthContext)
//     const [ email, setEmail ] = useState('')
//     const [ password, setPassword ] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const formData = {
//             email: email,
//             password: password 
//         }
//         // runClientSideValidations() 
//         // after client side validations pass
//         handleLogin(formData)
//     }
//     return (
//         <div>
//             <h2>Login Page</h2>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     placeholder='Enter email' 
//                     value={email} 
//                     onChange={e => setEmail(e.target.value)} 
//                 /> <br />
//                 <input 
//                     type="password" 
//                     placeholder='Enter password' 
//                     value={password} 
//                     onChange={e => setPassword(e.target.value)} 
//                 /> <br /> 
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }
/////////////////////////////////////////////////////

// import { useState, useContext, useEffect } from 'react';
// import AuthContext from '../context/AuthContext';

// export default function Login() {
//     const { handleLogin, authError, setAuthError } = useContext(AuthContext)
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [errors, setErrors] = useState({})

//     const runClientSideValidations = () => {
//         const newErrors = {}
//         if (!email) {
//             newErrors.email = 'Email is required'
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = 'Invalid email format'
//         }
//         if (!password) {
//             newErrors.password = 'Password is required'
//         }
//         setErrors(newErrors)
//         return Object.keys(newErrors).length === 0
//     }

//     const handleInputChange = (setter) => (e) => {
//         setter(e.target.value)
//         setAuthError(null)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (runClientSideValidations()) {
//             const formData = { email, password }
//             handleLogin(formData)
//         }
//     }

//     useEffect(() => {
//         if (authError) {
//             setErrors((prevErrors) => ({ ...prevErrors, server: authError }))
//         }
//     }, [authError])

//     return (
//         <div>
//             <h2>Login Page</h2>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     placeholder='Enter email' 
//                     value={email} 
//                     onChange={handleInputChange(setEmail)} 
//                 /> <br />
//                 {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//                 <input 
//                     type="password" 
//                     placeholder='Enter password' 
//                     value={password} 
//                     onChange={handleInputChange(setPassword)} 
//                 /> <br /> 
//                 {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//                 {errors.server && <p style={{ color: 'red' }}>{errors.server}</p>}
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }

//////////////////////////////////////////////////////////

// import { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

// export default function Login() {
//     const { handleLogin, authError, setAuthError } = useContext(AuthContext)
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [errors, setErrors] = useState({})

//     const runClientSideValidations = () => {
//         const newErrors = {}
//         if (!email) {
//             newErrors.email = 'Email is required'
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = 'Invalid email format'
//         }
//         if (!password) {
//             newErrors.password = 'Password is required'
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0
//     }

//     const handleInputChange = (setter) => (e) => {
//         setter(e.target.value)
//         setAuthError(null)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (runClientSideValidations()) {
//             const formData = { email, password }
//             handleLogin(formData)
//         }
//     }

//     useEffect(() => {
//         if (authError) {
//             setErrors((prevErrors) => ({ ...prevErrors, server: authError }))
//         }
//     }, [authError])

//     return (
//         <div>
//             <h2>Login Page</h2>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     placeholder='Enter email' 
//                     value={email} 
//                     onChange={handleInputChange(setEmail)} 
//                 /> <br />
//                 {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//                 <input 
//                     type="password" 
//                     placeholder='Enter password' 
//                     value={password} 
//                     onChange={handleInputChange(setPassword)} 
//                 /> <br /> 
//                 {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//                 {errors.server && <p style={{ color: 'red' }}>{errors.server}</p>}
//                 <input type="submit" />
//                 <div>
//                     <Link to="/forgot-password">Forgot Password?</Link>
//                 </div>
//             </form>
//         </div>
//     )
// }


// import { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

// export default function Login() {
//     const { handleLogin, authError, setAuthError } = useContext(AuthContext)
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [errors, setErrors] = useState({})

//     const runClientSideValidations = () => {
//         const newErrors = {}
//         if (!email) {
//             newErrors.email = 'Email is required'
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = 'Invalid email format'
//         }
//         if (!password) {
//             newErrors.password = 'Password is required'
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0
//     }

//     const handleInputChange = (setter) => (e) => {
//         setter(e.target.value)
//         setAuthError(null)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (runClientSideValidations()) {
//             const formData = { email, password }
//             handleLogin(formData)
//         }
//     }

//     useEffect(() => {
//         if (authError) {
//             setErrors((prevErrors) => ({ ...prevErrors, server: authError }))
//         }
//     }, [authError])

//     return (
//         <div>
//             <h2>Login Page</h2>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     placeholder='Enter email' 
//                     value={email} 
//                     onChange={handleInputChange(setEmail)} 
//                 /> <br />
//                 {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//                 <input 
//                     type="password" 
//                     placeholder='Enter password' 
//                     value={password} 
//                     onChange={handleInputChange(setPassword)} 
//                 /> <br /> 
//                 {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//                 {errors.server && <p style={{ color: 'red' }}>{errors.server}</p>}
//                 <input type="submit" />
//                 <div>
//                     <Link to="/forgot-password">Forgot Password?</Link>
//                 </div>
//             </form>
//         </div>
//     )
// }


// import { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

// export default function Login() {
//     const { handleLogin, authError, setAuthError } = useContext(AuthContext)
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [errors, setErrors] = useState({})

//     const runClientSideValidations = () => {
//         const newErrors = {}
//         if (!email) {
//             newErrors.email = 'Email is required'
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = 'Invalid email format'
//         }
//         if (!password) {
//             newErrors.password = 'Password is required'
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0
//     }

//     const handleInputChange = (setter) => (e) => {
//         setter(e.target.value)
//         setAuthError(null)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (runClientSideValidations()) {
//             const formData = { email, password }
//             handleLogin(formData)
//         }
//     }

//     useEffect(() => {
//         if (authError) {
//             setErrors((prevErrors) => ({ ...prevErrors, server: authError }))
//         }
//     }, [authError])

//     useEffect(() => {
//         // Clear errors when the component mounts
//         setErrors({});
//         setAuthError(null);
//     }, [setAuthError]);

//     return (
//         <div>
//             <h2>Login Page</h2>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     placeholder='Enter email' 
//                     value={email} 
//                     onChange={handleInputChange(setEmail)} 
//                 /> <br />
//                 {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//                 <input 
//                     type="password" 
//                     placeholder='Enter password' 
//                     value={password} 
//                     onChange={handleInputChange(setPassword)} 
//                 /> <br /> 
//                 {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//                 {errors.server && <p style={{ color: 'red' }}>{errors.server}</p>}
//                 <input type="submit" />
//                 <div>
//                     <Link to="/forgot-password">Forgot Password?</Link>
//                 </div>
//             </form>
//         </div>
//     )
// }


// import { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

// export default function Login() {
//     const { handleLogin, authError, setAuthError } = useContext(AuthContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState({});

//     const runClientSideValidations = () => {
//         const newErrors = {};
//         if (!email) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = 'Invalid email format';
//         }
//         if (!password) {
//             newErrors.password = 'Password is required';
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleInputChange = (setter) => (e) => {
//         setter(e.target.value);
//         setAuthError(null);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (runClientSideValidations()) {
//             const formData = { email, password };
//             handleLogin(formData);
//         }
//     };

//     useEffect(() => {
//         if (authError) {
//             setErrors((prevErrors) => ({ ...prevErrors, server: authError }));
//         }
//     }, [authError]);

//     useEffect(() => {
//         // Clear errors when the component mounts
//         setErrors({});
//         setAuthError(null);
//     }, [setAuthError]);

//     return (
//         <div>
//             <h2>Login Page</h2>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     placeholder='Enter email' 
//                     value={email} 
//                     onChange={handleInputChange(setEmail)} 
//                 /> <br />
//                 {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//                 <input 
//                     type="password" 
//                     placeholder='Enter password' 
//                     value={password} 
//                     onChange={handleInputChange(setPassword)} 
//                 /> <br /> 
//                 {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//                 {errors.server && <p style={{ color: 'red' }}>{errors.server}</p>}
//                 <input type="submit" />
//                 <div>
//                     <Link to="/forgot-password">Forgot Password?</Link>
//                 </div>
//             </form>
//         </div>
//     );
// }


import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Login() {
    const { handleLogin, authError, setAuthError } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [lockTime, setLockTime] = useState(null);
    const [timer, setTimer] = useState(null);

    const runClientSideValidations = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setAuthError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (runClientSideValidations()) {
            const formData = { email, password };
            const result = await handleLogin(formData);
            if (result?.accountLockedUntil) {
                console.log('Account locked until:', result.accountLockedUntil);
                setLockTime(result.accountLockedUntil);
                startTimer(result.accountLockedUntil);
            }
        }
    };

    const startTimer = (lockTime) => {
        const interval = setInterval(() => {
            const timeRemaining = new Date(lockTime).getTime() - Date.now();
            if (timeRemaining <= 0) {
                clearInterval(interval);
                setLockTime(null);
                setTimer(null);
                setErrors({});
                setAuthError(null);
                alert('You can now try logging in again.');
            } else {
                setTimer(Math.floor(timeRemaining / 1000));
                console.log('Timer:', Math.floor(timeRemaining / 1000));
            }
        }, 1000);
    };

    useEffect(() => {
        if (authError && !lockTime) {
            setErrors((prevErrors) => ({ ...prevErrors, server: authError }));
        }
    }, [authError, lockTime]);

    useEffect(() => {
        // Clear errors when the component mounts
        setErrors({});
        setAuthError(null);
    }, [setAuthError]);

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Enter email' 
                    value={email} 
                    onChange={handleInputChange(setEmail)} 
                /> <br />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                <input 
                    type="password" 
                    placeholder='Enter password' 
                    value={password} 
                    onChange={handleInputChange(setPassword)} 
                    disabled={!!lockTime}
                /> <br /> 
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                {errors.server && <p style={{ color: 'red' }}>{errors.server}</p>}
                {lockTime && <p style={{ color: 'red' }}>Account is locked. Try again in {timer} seconds.</p>}
                <input type="submit" disabled={!!lockTime} />
                <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </form>
        </div>
    );
}
