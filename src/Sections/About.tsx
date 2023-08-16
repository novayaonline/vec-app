//Imports
import './Styles/about.style.css';
import { useState } from 'react';

//Assets

const About = () => {
    const [buttonClicked, setButtonClicked] = useState(0);

    const handleButtonClick = (buttonIndex: number) => {
        setButtonClicked(buttonIndex);
    };

    const CardInfo = ({ text }: { text: string }) => {
        return (
            <div className='info-text-box'>
                <p className="info active-info">{text}</p>
            </div>
        );
    };
    
    return (
        <section id="about">
         <div className='box-card-about'>
                <div className='card-about'>
                    <div className="button-container">
                        <button className={buttonClicked === 0 ? 'active' : ''} onClick={() => handleButtonClick(0)} > Quem Somos </button> 
                        <button className={buttonClicked === 1 ? 'active' : ''} onClick={() => handleButtonClick(1)} > Missão </button>
                        <button className={buttonClicked === 2 ? 'active' : ''} onClick={() => handleButtonClick(2)} > Visão </button>
                        <button className={buttonClicked === 3 ? 'active' : ''} onClick={() => handleButtonClick(3)} > Valores </button>
                    </div>
                    {buttonClicked !== null && (
                        <div className="info-container">
                        {buttonClicked === 0 && (
                            <CardInfo text={'Somos uma Edtech especializada em educação e treinamentos corporativos. Compreendemos que o conhecimento é um elemento poderoso para o empoderamento social e o desenvolvimento de habilidades.'} />
                        )}
                        {buttonClicked === 1 && (
                             <CardInfo text={'Sermos acessíveis e termos comunicação para todos e atuar na gestão do conhecimento com criação de conteúdos educacionais acessíveis e com comunicabilidade para todos!'} />
                        )}
                        {buttonClicked === 2 && (
                            <CardInfo text={'Nossa visão é a conexão global pela educação. Buscamos uma educação mais comunicativa,promovendo o empoderamento social para desenvolver habilidades tanto no trabalho quanto na vida. Acreditamos que a educação deve ser acessível a todos, independentemente de sua localização geográfica ou língua. A V&C lidera esse movimento de mudança e oportunidades educacionais.'} />
                        )}
                        {buttonClicked === 3 && (
                            <CardInfo text={'Agirmos com propósito, Entregamos soluções com excelência, Construímos em colaboração '} />
                        )}
                        </div>
                    )}
                </div> 
           </div>
        </section>
    );
};

export default About;