// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';

// export default function Settings() {
//     const { handleLogout } = useContext(AuthContext)
//     const navigate = useNavigate()
//     const [currentPassword, setCurrentPassword] = useState('')
//     const [newPassword, setNewPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [error, setError] = useState('')

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (newPassword !== confirmPassword) {
//             setError('Passwords do not match')
//             return
//         }
//         try {
//             await axios.post('http://localhost:3030/api/users/update-password', {
//                 currentPassword,
//                 newPassword
//             }, {
//                 headers: { 'Authorization': localStorage.getItem('token') }
//             })
//             alert('Password updated successfully. Please log in again.')
//             handleLogout();
//             navigate('/login')
//         } catch (err) {
//             setError('Error updating password')
//         }
//     }

//     return (
//         <div>
//             <h2>Settings</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="password"
//                     placeholder="Current Password"
//                     value={currentPassword}
//                     onChange={(e) => setCurrentPassword(e.target.value)}
//                     required
//                 />
//                 <br/>
//                 <input
//                     type="password"
//                     placeholder="New Password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     required
//                 />
//                 <br/>
//                 <input
//                     type="password"
//                     placeholder="Confirm New Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                 />
//                 <br/>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <button type="submit">Update Password</button>
//             </form>
//         </div>
//     )
// }


import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Settings() {
    const { handleLogout } = useContext(AuthContext)
    const navigate = useNavigate()
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match')
            return
        }
        try {
            await axios.post('http://localhost:3030/api/users/update-password', {
                currentPassword,
                newPassword
            }, {
                headers: { 'Authorization': localStorage.getItem('token') }
            })
            alert('Password updated successfully. Please log in again.')
            handleLogout();
            navigate('/login')
        } catch (err) {
            setError('Error updating password')
        }
    }

return (
        <div>
            <h2>Settings</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                />
                <br/>
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <br/>
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <br/>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Update Password</button>
            </form>
        </div>
    )
}
