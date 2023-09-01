//Imports
import './Styles/Courses.style.css';
import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

//Assets
import courseLibras from '../Assets/courses/libras.webp'
import leiLucas from '../Assets/courses/leilucas.webp'
import ESG from '../Assets/courses/ESG.webp'
import assedioat from '../Assets/courses/assedioat.webp'
import comunicacaobv from '../Assets/courses/comunicaonv.webp'
import libras from '../Assets/courses/libras.webp'

const Courses = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);

    interface CardCourseProps {
        img: string;
        cOnline: string;
        colorOnline: string;
        titleCourse: string;
        tagCourse: string;
        link: string;
    }

    const createCardCourse: React.FC<CardCourseProps> = ({ img, cOnline, colorOnline, titleCourse, tagCourse, link }) => {
        return (
            <a href={link} target='blank'  className='box-course'>
                <div className='img-box-course'>
                    <img src={img} alt='Imagem de curso' />
                </div>
                <div className='texts-box-course'>
                    <p className={colorOnline}>{cOnline}</p>
                    <div className='title-course-box'>
                        <p className='title-course'>{titleCourse}</p>
                        <p className='tag2-course'>{tagCourse}</p>
                    </div>
                </div>
            </a>
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
        <section id='courses'>
            <div className='text-box-courses'>
                <h2>Cursos de Prateleira</h2>
                <p>Apresentação de soluções educacionais em temas relevantes e atuais para a comunidade a nível de educação e gestão do conhecimento.</p>
            </div>
            <div className='courses-container'>
                <div ref={containerRef} className="courses-box-courses"> 
                    {createCardCourse({
                        img: ESG,
                        cOnline: "Curso 100% Online",
                        colorOnline: "tag-course-blue",
                        titleCourse: "ESG",
                        tagCourse: "Inovação e Crescimento",
                        link: "https://www.google.com.br/"
                    })}
                    {createCardCourse({
                        img: leiLucas,
                        cOnline: "Curso 100% Online",
                        colorOnline: "tag-course-white",
                        titleCourse: "Lei Lucas",
                        tagCourse: "Primeiros Socorros",
                        link: "https://www.google.com.br/"
                    })}
                    {createCardCourse({
                        img: assedioat,
                        cOnline: "Curso 100% Online",
                        colorOnline: "tag-course-blue",
                        titleCourse: "Assédio no Ambiente de trabalho",
                        tagCourse: "Práticas Éticas",
                        link: "https://www.google.com.br/"
                    })}
                    {createCardCourse({
                        img: libras,
                        cOnline: "Curso 100% Online",
                        colorOnline: "tag-course-blue",
                        titleCourse: "Libras Nível Básico",
                        tagCourse: "Educação Inclusiva",
                        link: "https://www.google.com.br/"
                    })}
                    {createCardCourse({
                        img: comunicacaobv,
                        cOnline: "Curso 100% Online",
                        colorOnline: "tag-course-white",
                        titleCourse: "Comunicação não violenta",
                        tagCourse: "Linguagem assertiva",
                        link: "https://www.google.com.br/"
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

export default Courses;