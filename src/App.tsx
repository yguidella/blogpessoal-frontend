import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/tema/listatemas/ListaTemas';
import ListaPostagem from './components/postagem/listapostagens/ListaPostagens'
import FormTema from './components/tema/formtema/FormTema'
import DeletarTema from './components/tema/deletartema/DeletarTema'


function App() {
  return (
    <>
        <AuthProvider>
          <BrowserRouter>
            <Navbar/>
            <div className= 'bg-orange-200 min-h-[80vh]'>
              <Routes>
                {/* <Route path='/' element={<Home/>} />*/}
                <Route path="/" element={<Login />} />
                <Route path='/home' element={<Home/>} /> 
                <Route path='/cadastro' element={<Cadastro/>} />
                <Route path='/temas' element={<ListaTemas/>} />
                <Route path="/cadastrartema" element={<FormTema />} />
                <Route path="/editartema/:id" element={<FormTema />} />
                <Route path="/deletartema/:id" element={<DeletarTema />} />
                <Route path="/postagens" element={<ListaPostagem />} />
              </Routes>
            </div>
            <Footer/>
          </BrowserRouter>
        </AuthProvider>
    </>    
  )
}

export default App;