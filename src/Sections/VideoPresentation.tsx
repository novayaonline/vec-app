//Imports
import './Styles/VideoPresentation.style.css';
import handleLinkClick from '../Components/ScrollTo';

const VideoPresentation = () => {
    return (
        <section id='videopresentation'>
            <div>
                <div className='video-box-videopresentation'>
                    <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/D0_DedJPfrA?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                <div className='text-box-videopresentation'>
                    <p>Potencialize e desenvolva o desempenho do seu time, compartilhando conhecimento com metodologias como heutagogia e andragogia.</p>
                    <a href='#contact' onClick={handleLinkClick} className='button-style'>Entre em Contato</a>
                </div>
            </div>
        </section>
    )
};

export default VideoPresentation;