//Imports
import './Styles/Rodape.style.css';
import handleLinkClick from '../Components/ScrollTo';

//Assets
import VecLogo from '../Assets/V&C---Branco 1.png';
import { BsTelephoneFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Rodape = () => {
    return (
        <section id="rodape">
            <div className='vec-box'>
                <div className='img-box-rodape'>
                    <img src={VecLogo} alt='Logo V&C' />
                </div>
                <div className='dados-vec-rodape'>
                    <div>
                    <p> <BsTelephoneFill /> (54) 8164-4156 </p>
                    <p> <BsWhatsapp /> (28) 99988-0837 </p>
                    </div>
                    <p> <AiOutlineMail /> contato@vecedutec.com.br </p>
                </div>
            </div>
            <div className='vec-rodape'>
                <h4>Cursos</h4>
                <a href='#CoursesAndSolutions' onClick={handleLinkClick}>Cursos de Prateleira</a>
                <a href='#CoursesAndSolutions' onClick={handleLinkClick}>Plataforma LMS V&C</a>
                <a href='#CoursesAndSolutions' onClick={handleLinkClick}>Ferramentas de Autoria</a>
                <a href='#CoursesAndSolutions' onClick={handleLinkClick}>Fábrica de Conteúdo</a>
                <a href='#CoursesAndSolutions' onClick={handleLinkClick}>Consultoria Pedagógica</a>
                <a href='#CoursesAndSolutions' onClick={handleLinkClick}>Revisão Textual</a>
                <a href='#CoursesAndSolutions' onClick={handleLinkClick}>Tradução e interpretação em LIBRAS</a>
                <a href='#CoursesAndSolutions' onClick={handleLinkClick}>EAD (E-Learning)</a>

            </div>
            <div className='vec-rodape'>
                <h4>A V&C</h4>
                <a href='#about' onClick={handleLinkClick}>Quem Somos</a>
                <a href='#about' onClick={handleLinkClick}>Missão</a>
                <a href='#about' onClick={handleLinkClick}>Visão</a>
                <a href='#about' onClick={handleLinkClick}>Valores</a>
            </div>
        </section>
    )
}

export default Rodape;