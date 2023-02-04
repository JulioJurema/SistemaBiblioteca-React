import { Link } from 'react-router-dom'
import './style.css'

function NavBar(){
    return(
        <div className='navBar'>
            <img className='logoSite' src='Assets/biblioteca.png' alt='logoSite'></img>
            <div className='navArea'>
                <Link to="/" ><img className='navIcone' src='Assets/home.png' alt='Home'></img></Link>
                <Link to="/cadastro" ><img className='navIcone' src='Assets/livro.png' alt='Livros'></img></Link>
                <Link to="/usuarios" ><img className='navIcone' src='Assets/user.png' alt='Usuários'></img></Link>
            </div>
            <button>Sair</button>
        </div>
    )
}

export default NavBar;