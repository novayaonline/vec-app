//Imports
import './Styles/presentation.style.css';
import handleLinkClick from '../Components/ScrollTo';

//Assets
import rocktMan from '../Assets/Foguete.png';
const Presentation = () => {
    return (
        <div id="presentation">
            <div className='text-box-presentation'>
                <h1>Impulsione o <br></br> desempenho<br></br>do seu time.</h1>
                <p>Agregamos fontes, exemplos e cases relevantes.</p>
                <a href="#CoursesAndSolutions" onClick={handleLinkClick} className='button-style'>Saiba mais</a>
            </div>
            <div className='img-box-presentation'>
                <img src={rocktMan} alt='Menino tendo ideias em cima de um foguete' />
            </div>
        </div>
    );
};

export default Presentation;