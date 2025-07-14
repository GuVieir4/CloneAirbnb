import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'
import { useUserContext } from '../contexts/UserContext';

function AccProfile() {
    const {user, setUser} = useUserContext()
    const [redirect, setRedirect] = useState(false)

    const logout = async () => {
        try {
            const {data} = await axios.post("/users/logout")
            setRedirect(true);
        } catch {
            alert(JSON.stringify(error))
        }
    }

    if (redirect) return <Navigate to="/" />

    return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
        <p>Logado como {user?.name} ({user?.email})</p>
        <button onClick={logout} className="bg-primary-400 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition">
            Logout?
        </button>
        </div>
    </div>
  )
}

export default AccProfile;