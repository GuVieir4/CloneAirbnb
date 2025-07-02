import { Link } from 'react-router-dom';


function Login() {
    return (
    <section className="flex items-center">
        <div className="gap-8 flex flex-col mx-auto max-w-7xl px-8 py-8 items-center">
            <h1 className="text-3xl font-bold">Faça Seu Login</h1>

            <form action="" className='flex flex-col gap-4 w-full'>
                <input placeholder='Digite seu email' type="email" className='w-full rounded-full border border-gray-300 px-4 py-2' />
                <input placeholder='Digite sua senha' type="password" className='w-full rounded-full border border-gray-300 px-4 py-2' />
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