//Imports
import './Styles/VideoPresentation.style.css';
import videoFrame from '../Assets/videoframe.png';

const VideoPresentation = () => {
    return (
        <section id='videopresentation'>
            <div className='video-box-videopresentation'>
                <img src={videoFrame} alt='Video' />
            </div>
            <div className='text-box-videopresentation'>
                <p>Potencialize e desenvolva o desempenho do seu time, compartilhando conhecimento com metodologias como heutagogia e andragogia.</p>
                <a href='#contact' className='button-style'>Entre em Contato</a>
            </div>
        </section>
    )
};

export default VideoPresentation;