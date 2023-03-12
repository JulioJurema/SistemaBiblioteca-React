import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Cadastro from './Pages/Livros'
import Usuarios from './Pages/Usuarios'
import Navbar from './Components/NavBar'
import Error404 from './Pages/Error404'

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

                        <Route path="*" element={ <Error404 /> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default RoutesApp;