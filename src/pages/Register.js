// import { useState, useContext } from 'react' 
// import AuthContext from '../context/AuthContext'

// export default function Register(){
//     const { handleRegister} = useContext(AuthContext)
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
//         handleRegister(formData)
//     }
//     return (
//         <div>
//             <h2>Register Page</h2>
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


// import { useState, useContext, useEffect } from 'react';
// import AuthContext from '../context/AuthContext';

// export default function Register() {
//     const { handleRegister, authError, setAuthError } = useContext(AuthContext)
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
//         } else if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//             newErrors.password = 'Password must be at least 8 characters long, contain one uppercase letter, one number, and one symbol'
//         }
//         setErrors(newErrors)
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
//             handleRegister(formData)
//         }
//     }

//     useEffect(() => {
//         if (authError) {
//             setErrors((prevErrors) => ({ ...prevErrors, server: authError }))
//         }
//     }, [authError])

//     return (
//         <div>
//             <h2>Register Page</h2>
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

import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Register() {
    const { handleRegister, authError, setAuthError } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const runClientSideValidations = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            newErrors.password = 'Password must be at least 8 characters long, contain one uppercase letter, one number, and one symbol';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setAuthError(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (runClientSideValidations()) {
            const formData = { email, password };
            handleRegister(formData);
        }
    };

    useEffect(() => {
        if (authError) {
            setErrors((prevErrors) => ({ ...prevErrors, server: authError }));
        }
    }, [authError]);

    useEffect(() => {
        // Clear errors when the component mounts
        setErrors({})
        setAuthError(null)
    }, [setAuthError])

    return (
        <div>
            <h2>Register Page</h2>
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
                /> <br /> 
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                {errors.server && <p style={{ color: 'red' }}>{errors.server}</p>}
                <input type="submit" />
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

