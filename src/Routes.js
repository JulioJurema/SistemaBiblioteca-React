import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Cadastro from './Pages/Livros'
import Usuarios from './Pages/Usuarios'
import Navbar from './Components/NavBar'

function RoutesApp(){
    return(
        <BrowserRouter>
            <div className='routesArea'>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={ <Home/> } />
                        <Route path="/cadastro" element={ <Cadastro/> } />
                        <Route path="/usuarios" element={ <Usuarios/> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default RoutesApp;