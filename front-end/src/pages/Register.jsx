import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'
import { useUserContext } from '../contexts/UserContext';

function Register() {

    const { setUser } = useUserContext()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email && password && name) {
            try {
                const { data: userDoc } = await axios.post('/users', {
                    name,
                    email,
                    password,
                });

                setUser(userDoc)
                setRedirect(true)
            } catch (error) {
                alert(`Deu um erro ao criar a conta: ${error.response.data}`);
            }
        } else {
            alert("Algum dado não está preenchido.");
        }
    };

    if (redirect) return <Navigate to="/" />

    return (
    <section className="flex items-center">
        <div className="gap-8 flex flex-col mx-auto max-w-7xl px-8 py-8 items-center">
            <h1 className="text-3xl font-bold">Faça Seu Cadastro</h1>

            <form action="" className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
                <input placeholder='Digite seu nome' type="text" className='w-full rounded-full border border-gray-300 px-4 py-2' 
                value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Digite seu email' type="email" className='w-full rounded-full border border-gray-300 px-4 py-2' 
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Digite sua senha' type="password" className='w-full rounded-full border border-gray-300 px-4 py-2' 
                value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='cursor-pointer w-full rounded-full border border-gray-300 px-4 py-2 bg-primary-400 font-bold text-white' >Criar Conta</button>
            </form>

            <p>Já tem uma conta?{" "}
                <Link to="/login" className="underline font-semibold" >
                Faça o Login
                </Link>
            </p>

        </div>
    </section>
    )
}

export default Register