// import { useContext } from "react"
// import AuthContext from "../context/AuthContext"
// export default function Profile(){
//     const { state } = useContext(AuthContext)
//     if(!state.user) {
//         return <p>loading...</p>
//     }
//     return (
//         <div>
//             <h2>Profile Page</h2>
//             <p>email - { state.user.email } </p>
//             <p>register date - { state.user.createdAt } </p>
//         </div>
//     )
// }


// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";

// export default function Profile() {
//     const { state } = useContext(AuthContext)

//     if (!state.user) {
//         return <p>loading...</p>
//     }

//     const formatDateToIST = (dateString) => {
//         const date = new Date(dateString)
//         return date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
//     }

//     return (
//         <div>
//             <h2>Profile Page</h2>
//             <p>email - {state.user.email}</p>
//             <p>register date - {formatDateToIST(state.user.createdAt)}</p>
//         </div>
//     )
// }


import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Profile() {
    const { state } = useContext(AuthContext);

    if (!state.user) {
        return <p>Loading...</p>
    }

    const formatDateToIST = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    }

    const checkPasswordUpdateReminder = () => {
        const passwordAge = Date.now() - new Date(state.user.passwordChangedAt).getTime();
        const daysSinceLastUpdate = passwordAge / (1000 * 60 * 60 * 24);
        return daysSinceLastUpdate > 30;
    }

return (
        <div>
            <h2>Profile Page</h2>
            <p>Email - {state.user.email}</p>
            <p>Register Date - {formatDateToIST(state.user.createdAt)}</p>
            {checkPasswordUpdateReminder() && (
                <p style={{ color: 'red' }}>
                    {/* It has been over 30 days since you last changed your password. Please update your password in the <a href="/settings">Settings</a> page. */}
                    It has been over 30 days since you last changed your password. Please update your password in the <Link to="/settings">Settings</Link> page.
                </p>
            )}
        </div>
    )
}
// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";

// export default function Profile() {
//     const { state } = useContext(AuthContext);

//     if (!state.user) {
//         return <p>Loading...</p>
//     }

//     const formatDateToIST = (dateString) => {
//         const date = new Date(dateString);
//         return date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
//     }

//     const checkPasswordUpdateReminder = () => {
//         const passwordAge = Date.now() - new Date(state.user.passwordChangedAt).getTime();
//         const minutesSinceLastUpdate = passwordAge / (1000 * 60);
//         return minutesSinceLastUpdate > 50;
//     }

//     return (
//         <div>
//             <h2>Profile Page</h2>
//             <p>Email - {state.user.email}</p>
//             <p>Register Date - {formatDateToIST(state.user.createdAt)}</p>
//             {checkPasswordUpdateReminder() && (
//                 <p style={{ color: 'red' }}>
//                     It has been over 50 minutes since you last changed your password. Please update your password in the <a href="/settings">Settings</a> page.
//                 </p>
//             )}
//         </div>
//     )
// }
