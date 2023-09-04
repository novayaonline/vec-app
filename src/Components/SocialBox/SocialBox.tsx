//Imports
import './SocialBox.style.css';
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const SocialBox = () => {
    interface SocialBoxProps {
        icon: any;
        title: string;
        link: string;
        classe: string;
    };

    const createSocialBox: React.FC<SocialBoxProps> = ({ icon, title, link, classe }) => {
        return (
            <a href={link} target='_blanck' className={classe}> {title} <span> {icon} </span> </a>
        );
    };

    return (
        <div id='social-box'>
            {createSocialBox({
                icon: <FaLinkedinIn />,
                title: 'LinkedIn',
                link: 'https://www.linkedin.com/in/vec-edtech-educa%C3%A7%C3%A3o-e-treinamentos-corporativos-72365826b/',
                classe: 'blue',
            })}
            {createSocialBox({
                icon: <BsWhatsapp />,
                title: 'WhatsApp',
                link: 'https://api.whatsapp.com/send?phone=555481644156',
                classe: 'green',
            })}
            {createSocialBox({
                icon: <BsInstagram />,
                title: 'Instagram',
                link: 'https://www.instagram.com/vecedtech/?igshid=OGQ5ZDc2ODk2ZA%3D%3D',
                classe: 'rose',
            })}
            
        </div>
    );
};

export default SocialBox;