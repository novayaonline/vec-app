//Imports
import './navbar.style.css';
import vecLogo from '../../Assets/logovec.webp';

const Navbar = () => {
    return(
        <nav id="navbar">
            <div className='img-box-navbar'>
                <img src={vecLogo} alt="Logomarca V&C" />
            </div>
            <ul className='menu-itens-navbar'> 
                <li className='itens-navbar'><a href='#about'>Sobre nós</a></li>
                <li className='itens-navbar'><a href='#about'>Soluções</a></li>
                <li className='itens-navbar'><a href='#about'>Feedbacks</a></li>
                <li className='itens-navbar'><a href='#about'>Contatos</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;