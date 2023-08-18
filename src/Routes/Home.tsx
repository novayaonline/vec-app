//Sections
import Presentation from '../Sections/Presentation';
import About from '../Sections/About';
import CoursesAndSolutions from '../Sections/CoursesAndSolutions';
import VideoPresentation from '../Sections/VideoPresentation';
import Courses from '../Sections/Courses';

const Home = () => {
    return (
        <div id='home'>
           <Presentation />
           <About />
           <CoursesAndSolutions />
           <VideoPresentation />
           <Courses />
        </div>
    );
};

export default Home;