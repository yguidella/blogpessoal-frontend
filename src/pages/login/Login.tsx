import { Link } from "react-router-dom";

function Login() {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
                            place-items-center font-bold">
                
                <form className="flex justify-center items-center 
                      flex-col w-1/2 gap-4">
                    <h2 className="text-slate-900 text-5xl">Entrar</h2>
                        <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário"
                            className="border-2 border-slate-800 rounded p-2"
                        />
                        </div>
                        <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-800 rounded p-2"
                        />
                        </div>
                    <button
                        type='submit'
                        className='rounded text-white bg-purple-500 
                                   hover:bg-purple-900 w-1/2 py-2'>
                        <span>Entrar</span>
                    </button>
                    
                    <hr className="border-slate-400"/>

                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to='/cadastro' className="text-purple-500 hover:text-purple-900">
                            Cadastre-se
                        </Link>
                    </p>
                </form>

                <div className="bg-[url('https://ik.imagekit.io/yytwlza66/img_caderno_caqui.png')]
                                lg:block hidden bg-no-repeat
                                w-full min-h-screen bg-cover bg-center"
                ></div>
            </div>
        </>
    );    
}

export default Login;