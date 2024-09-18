import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
export default function Dashboard(){
    const { state } = useContext(AuthContext)
    if(!state.user) {
        return <p>loading...</p>
    }

    console.log('User data available:', state.user)
    return (
        <div>
            <h2>Dashboard Page</h2>
            <p>Welcome user - { state.user.email } </p>
        </div>
    )
}