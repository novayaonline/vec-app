//Imports
import './Styles/Courses.style.css';
import whiteFrame from '../Assets/whiteframe.png';
import { BsChevronCompactLeft } from "react-icons/bs";

const Courses = () => {

    interface CardCourseProps {
        img: string;
        cOnline: string;
        colorOnline: string;
        titleCourse: string;
        tagCourse: string;
    }

    const createCardCourse: React.FC<CardCourseProps> = ({ img, cOnline, colorOnline, titleCourse, tagCourse }) => {
        return (
            <div className='box-course'>
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
            </div>
        );
    };


    return (
        <section id='courses' >
            <div className='text-box-courses'>
                <h2>Cursos de Prateleira</h2>
                <p>Apresentação de soluções educacionais em temas relevantes e atuais para a comunidade a nível de educação e gestão do conhecimento.</p>
            </div>
            <div className='courses-box-courses'>
                {createCardCourse({
                    img: whiteFrame,
                    cOnline: "Curso 100% Online",
                    colorOnline: "tag-course-blue",
                    titleCourse: "Psicopedagogia",
                    tagCourse: "Análise de caso"
                })}
                {createCardCourse({
                    img: whiteFrame,
                    cOnline: "Curso 100% Online",
                    colorOnline: "tag-course-white",
                    titleCourse: "Psicopedagogia",
                    tagCourse: "Análise de caso"
                })}
                {createCardCourse({
                    img: whiteFrame,
                    cOnline: "Curso 100% Online",
                    colorOnline: "tag-course-blue",
                    titleCourse: "Psicopedagogia",
                    tagCourse: "Análise de caso"
                })}
                {createCardCourse({
                    img: whiteFrame,
                    cOnline: "Curso 100% Online",
                    colorOnline: "tag-course-blue",
                    titleCourse: "Psicopedagogia",
                    tagCourse: "Análise de caso"
                })}
                {createCardCourse({
                    img: whiteFrame,
                    cOnline: "Curso 100% Online",
                    colorOnline: "tag-course-blue",
                    titleCourse: "Psicopedagogia",
                    tagCourse: "Análise de caso"
                })}
                {createCardCourse({
                    img: whiteFrame,
                    cOnline: "Curso 100% Online",
                    colorOnline: "tag-course-blue",
                    titleCourse: "Psicopedagogia",
                    tagCourse: "Análise de caso"
                })}
                {createCardCourse({
                    img: whiteFrame,
                    cOnline: "Curso 100% Online",
                    colorOnline: "tag-course-blue",
                    titleCourse: "Psicopedagogia",
                    tagCourse: "Análise de caso"
                })}
                {createCardCourse({
                    img: whiteFrame,
                    cOnline: "Curso 100% Online",
                    colorOnline: "tag-course-blue",
                    titleCourse: "Psicopedagogia",
                    tagCourse: "Análise de caso"
                })}
                
            </div>
        </section>
    )
};

export default Courses;