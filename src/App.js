//***********************************without oauth*************************************** */

// import { Routes, Route, Link } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { useContext } from 'react';
// import PrivateRoute from './components/PrivateRoute';
// import AuthContext from './context/AuthContext';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings'; // Import Settings component
// import ForgotPassword from './components/ForgotPassword';
// import ResetPassword from './components/ResetPassword';
// import MyNotes from './pages/MyNotes';
// function App() {
//     const { state, handleLogout } = useContext(AuthContext);

//     return (
//         <div className="App">
//             <h2>User Auth Client</h2>
//             <ul>
//                 {state.isLoggedIn ? (
//                     <>
//                         <li><Link to="/dashboard">Dashboard</Link></li>
//                         <li><Link to="/profile">Profile</Link></li>
//                         <li><Link to="/my-notes">MyNotes</Link></li>
//                         <li><Link to="/settings">Settings</Link></li>
//                         <li><button onClick={handleLogout}>Logout</button></li>
//                     </>
//                 ) : (
//                     <>
//                         <li><Link to="/register">Register</Link></li>
//                         <li><Link to="/login">Login</Link></li>
//                     </>
//                 )}
//             </ul>

//             <Routes>
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/dashboard" element={
//                     <PrivateRoute>
//                         <Dashboard />
//                     </PrivateRoute>
//                 } />
//                 <Route path="/profile" element={
//                     <PrivateRoute>
//                         <Profile />
//                     </PrivateRoute>
//                 } />
//                 <Route path="/my-notes" element={
//                     <PrivateRoute>
//                         <MyNotes />
//                     </PrivateRoute>
//                 } />
//                 <Route path="/settings" element={
//                     <PrivateRoute>
//                         <Settings />
//                     </PrivateRoute>
//                 } />
//                 <Route path="/forgot-password" element={<ForgotPassword />} />
//                 <Route path="/reset-password/:token" element={<ResetPassword />} />
//             </Routes>

//             <ToastContainer />
//         </div>
//     )
// }

// export default App;


//******************************************************************* */
//////////////////////auth///////////////////////////////

// src/App.js
import { Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext } from 'react';
import PrivateRoute from './components/PrivateRoute';
import AuthContext from './context/AuthContext';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings'; // Import Settings component
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import MyNotes from './pages/MyNotes';

function App() {
    const { state, handleLogout } = useContext(AuthContext);

    return (
        <div className="App">
            <h2>User Auth Client</h2>
            <ul>
                {state.isLoggedIn ? (
                    <>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/my-notes">MyNotes</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                )}
            </ul>

            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } />
                <Route path="/profile" element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                } />
                <Route path="/my-notes" element={
                    <PrivateRoute>
                        <MyNotes />
                    </PrivateRoute>
                } />
                <Route path="/settings" element={
                    <PrivateRoute>
                        <Settings />
                    </PrivateRoute>
                } />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
            </Routes>

            <ToastContainer />
        </div>
    );
}

export default App;