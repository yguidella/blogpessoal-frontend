import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema'

interface CardTemaProps{
    tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-orange-200'>
            <header className='py-2 px-6 bg-fuchsia-900 text-white font-bold text=2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-orange-100 h-full'>{tema.descricao}</p>

            <div className='flex'>
                <Link to={`/editartema/${tema.id}`} 
                    className='w-full text-slate-100 bg-fuchsia-400 hover:bg-fuchsia-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`}
                    className='w-full text-slate-100 bg-orange-400 hover:bg-orange-700 flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardTema