//Imports
import './Styles/feedbacks.style.css';
import person1 from '../Assets/persons/person1.png';
import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

//Assets
import imgLucas from '../Assets/persons/lucas.png';
import imgluiz from '../Assets/persons/luiz.png';
import imgCarlos from '../Assets/persons/carlos.png';
import imgSara from '../Assets/persons/Sara.png';
import imgSoraya from '../Assets/persons/soraya.png';
import imgSuzana from '../Assets/persons/suzana.png';


const Feedbacks = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);

    interface CardCourseProps {
        img: string;
        text: string;
        name: string;
        note: number;
        location: string;
    }

    const createCardCourse: React.FC<CardCourseProps> = ({ img, text, name, note, location }) => {
        return (
            <div className='box-feedback'>
                <div className='feedback-dades'>
                    <div className='feedback-img-box'>
                        <img src={img} alt='imagem de pessoa' />
                    </div>
                    <div className='feedback-tittle'>
                        <p className='title-name'>{name}</p>
                        <p className='title-location'>{location}</p>
                    </div>
                    <div className='feedback-note-box'>
                        <AiFillStar /> <p>{note},0</p>
                    </div>
                </div>
                <div className='feedback-text'>
                    <p>{text}</p>
                </div>
            </div>
        );
    };

    const handleNextClick = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += containerWidth / 2;
        }
    };

    const handlePrevClick = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= containerWidth / 2;
        }
    };

    const handleContainerResize = () => {
        if (containerRef.current) {
            const containerDimensions = containerRef.current.getBoundingClientRect();
            setContainerWidth(containerDimensions.width);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleContainerResize);
        handleContainerResize(); // Initial width calculation
        return () => {
            window.removeEventListener('resize', handleContainerResize);
        };
    }, []);

    return (
        <section id='feedbacks'>
            <div className='text-box-feedbacks'>
                <h2>Torne-se um Aluno</h2>
                <p>Veja o que nossos alunos acham de nossa didática e cursos</p>
            </div>
            <div className='feedbacks-container'>
                <div ref={containerRef} className="feedbacks-box-feedbacks"> 
                    {createCardCourse({
                        img: imgCarlos,
                        text: "Conteúdo enriquecedor! Sensacional!!!!",
                        name: "Carlos da Silva",
                        note: 5,
                        location: "São Paulo - SP",
                    })}
                    {createCardCourse({
                        img: imgSara,
                        text: "Conteúdo enriquecedor! Sensacional!!!!",
                        name: "Sara Mendes",
                        note: 5,
                        location: "Santos - SP",
                    })}
                    {createCardCourse({
                        img: imgluiz,
                        text: "Conteúdo enriquecedor! Sensacional!!!!",
                        name: "Luiz Henrrique",
                        note: 5,
                        location: "Salvador - BA",
                    })}
                    {createCardCourse({
                        img: imgSoraya,
                        text: "Conteúdo enriquecedor! Sensacional!!!!",
                        name: "Soraya Moura",
                        note: 5,
                        location: "Cuiaba - MT",
                    })}
                    {createCardCourse({
                        img: imgLucas,
                        text: "Conteúdo enriquecedor! Sensacional!!!!",
                        name: "Lucas Lopes",
                        note: 5,
                        location: "Belo Horizonte - BH",
                    })}
                    {createCardCourse({
                        img: imgSuzana,
                        text: "Conteúdo enriquecedor! Sensacional!!!!",
                        name: "Suzana Santos",
                        note: 5,
                        location: "Foz do Iguaçu - PR",
                    })}
                    
                </div> 
                <div className='navigate-btns-box'>
                    <button onClick={handlePrevClick}> <AiOutlineArrowLeft /> </button>
                    <button onClick={handleNextClick}> <AiOutlineArrowRight /> </button>
                </div>
            </div>
        </section>
    )
};

export default Feedbacks;