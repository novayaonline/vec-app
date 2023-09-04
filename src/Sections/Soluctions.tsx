//Imports
import './Styles/soluctions.style.css';
import handleLinkClick from '../Components/ScrollTo';

//Assets
import noteBookIMG from '../Assets/soluctions/pixelbook-go.webp';
import AuditoriaIMG from '../Assets/soluctions/Frame-23.webp';
import FabricIMG from '../Assets/soluctions/fabrica.webp';
import TableIMG from '../Assets/soluctions/ipad-pro-2020.webp';
import RevisãoIMG from '../Assets/soluctions/frame-21.webp';
import LibrasIMG from '../Assets/soluctions/sinais.webp';
import CellphoneIMG from '../Assets/soluctions/iphone-13.webp';

const Soluctions = () => {
    interface CardSoluctionProps {
        isFliped: boolean;
        img: string;
        title: string;
        text: string;
    };

    const createCardSoluction: React.FC<CardSoluctionProps> = ({ isFliped, img, title, text, }) => {
        if (!isFliped) {
            return (
                <div className='container-soluction'>
                    <div className='box-soluction'>
                        <div className='img-box-soluction'>
                            <img src={img} alt='Imagem' />
                        </div>
                        <div className='text-box-soluction'>
                            <h3>{title}</h3>
                            <p>{text}</p>
                            <a href='#contact' className='button-style' onClick={handleLinkClick}>Solicitar Orçamento</a>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='container-soluction container-soluction-blue'>
                    <div className='box-soluction'>
                        <div className='text-box-soluction'>
                            <h3>{title}</h3>
                            <p>{text}</p>
                            <a href='#contact' className='button-style' onClick={handleLinkClick}>Solicitar Orçamento</a>
                        </div>
                        <div className='img-box-soluction'>
                            <img src={img} alt='Imagem' />
                        </div>
                    </div>
                </div>
            );
        };
    };

    return(
        <section id="soluctions">
            {createCardSoluction({
                isFliped: false,
                img: noteBookIMG,
                title: "Plataforma LMS V&C",
                text: "Uma plataforma criativa e completa para potencializar o treinamento e compartilhamento de conhecimento, impulsionando o desempenho do seu time. Além disso, oferecemos uma gestão educacional eficiente com todos os indicadores na palma da mão! Aproveite ao máximo o potencial da sua equipe com nossa plataforma inovadora."
            })}

            {createCardSoluction({
                isFliped: true,
                img: AuditoriaIMG,
                title: "Ferramentas de Autoria",
                text: "Oferecemos uma aprendizagem dinâmica e centrada no usuário, repleta de inovação e experiências envolventes. Além de texto e vídeo, nossa plataforma disponibiliza infográficos, quizzes,imagens 360° graus, áudios, podcasts e muito mais em um único lugar, proporcionando aos estudantes acesso completo ao conhecimento."
            })}
            {createCardSoluction({
                isFliped: false,
                img: FabricIMG,
                title: "Fábrica de Conteúdo",
                text: "Realizar roteirização de conteúdo educacional curado, incorporando diversos recursos didáticos, como vídeos, aulas narradas e trilhas em cursos EAD."
            })}

            {createCardSoluction({
                isFliped: true,
                img: TableIMG,
                title: "Consultoria Pedagócica",
                text: "Oferecemos apoio completo na elaboração de propostas pedagógicas e educação corporativa, abrangendo roteiros, gravações de vídeos e áudios acessíveis, integração de IA, ferramentas de autoria, e dashboard com indicadores. Formatos EAD, presencial ou híbrido (aulas síncronas e assíncronas). Inserção de Universidade Corporativa ou  para aprendizado contínuo."
            })}
            {createCardSoluction({
                isFliped: false,
                img: RevisãoIMG,
                title: "Revisão Textual",
                text: "Revisão gramatical, ortográfica e normativa (ABNT) seguindo métricas específicas do projeto."
            })}

            {createCardSoluction({
                isFliped: true,
                img: LibrasIMG,
                title: "Tradução e Interpretação em LIBRAS",
                text: "Com o intuito de promover a acessibilidade e inclusão para todos, oferecemos serviços de adaptação da escrita e interpretação e tradução em Libras."
            })}

            {createCardSoluction({
                isFliped: false,
                img: CellphoneIMG,
                title: "EAD (E-Learning)",
                text: "Realizamos a adequação pedagógica do conteúdo bruto do cliente, ajustando linguagem e público-alvo. Agregamos fontes, exemplos e cases relevantes, utilizando metodologias como heutagogia e andragogia para estimular a autonomia dos alunos. Nosso objetivo: oferecer uma experiência educacional completa e enriquecedora"
            })}
            
        </section>
    )
}

export default Soluctions;