//Imports
import './navbar.style.css';
import vecLogo from '../../Assets/logovec.webp';
import handleLinkClick from '../ScrollTo';

const Navbar: React.FC = () => {

    interface LinkProps {
        text: string;
        link: string;
    }
    
    const RenderLink = ({ text, link }: LinkProps): JSX.Element => {
        return (
            <li className='itens-navbar' key={text}>
                <a href={link} onClick={handleLinkClick}>
                    {text}
                </a>
            </li>
        );
    };

    const links: LinkProps[] = [
        { text: 'Sobre Nós', link: '#about' },
        { text: 'Soluções', link: '#CoursesAndSolutions' },
        { text: 'Feedbacks', link: '#feedbacks' },
        { text: 'Contato', link: '#contact' },

        // ... outros links
    ];

    const toggleMenu = () => {
        let menuItens = document.querySelector('ul.menu-itens-navbar');
        menuItens?.classList.toggle('menu-itens-navbar-active');
    }
    
    return(
        <nav id="navbar">
            <div>
                <div className='img-box-navbar'>
                    <img src={vecLogo} alt="Logomarca V&C" />
                </div>
                <button id='btn-menu' onClick={toggleMenu}>
                        BTN
                </button>
                <ul className='menu-itens-navbar'> 
                    {links.map((linkProps) => (
                        <RenderLink
                            text={linkProps.text}
                            link={linkProps.link}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;