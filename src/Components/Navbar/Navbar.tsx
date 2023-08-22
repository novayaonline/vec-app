//Imports
import './navbar.style.css';
import vecLogo from '../../Assets/logovec.webp';

const Navbar: React.FC = () => {

    interface LinkProps {
        text: string;
        link: string;
    }
    
    const handleLinkClick = (e: any) => {
        e.preventDefault();
        let element = e.target.getAttribute('href');
        let toSection = document.querySelector(element).offsetTop;
    
        window.scroll({
            top: toSection,
            behavior: "smooth",
        });
    };

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


    return(
        <nav id="navbar">
            <div className='img-box-navbar'>
                <img src={vecLogo} alt="Logomarca V&C" />
            </div>
            <ul className='menu-itens-navbar'> 
                {links.map((linkProps) => (
                    <RenderLink
                        text={linkProps.text}
                        link={linkProps.link}
                    />
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;