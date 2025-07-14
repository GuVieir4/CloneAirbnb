import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'
import { useUserContext } from '../contexts/UserContext';

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const { user, setUser } = useUserContext()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email && password) {
            try {
                const { data: userDoc } = await axios.post('/users/login', {
                    email,
                    password,
                });

                setUser(userDoc)
                setRedirect(true)
            } catch (error) {
                alert(`Deu um erro ao logar: `);
            }
        } else {
            alert("Os dados não estão preenchidos.");
        }
    };

    if (redirect || user) return <Navigate to="/" />

    return (
    <section className="flex items-center">
        <div className="gap-8 flex flex-col mx-auto max-w-7xl px-8 py-8 items-center">
            <h1 className="text-3xl font-bold">Faça Seu Login</h1>

            <form action="" className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
                <input placeholder='Digite seu email' type="email" className='w-full rounded-full border border-gray-300 px-4 py-2' 
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Digite sua senha' type="password" className='w-full rounded-full border border-gray-300 px-4 py-2' 
                value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='cursor-pointer w-full rounded-full border border-gray-300 px-4 py-2 bg-primary-400 font-bold text-white' >Login</button>
            </form>

            <p>Ainda não tem uma conta?{" "}
                <Link to="/register" className="underline font-semibold" >
                Registre-se
                </Link>
            </p>

        </div>
    </section>
    )
}

export default Login