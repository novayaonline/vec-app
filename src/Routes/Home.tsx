//Sections
import Presentation from '../Sections/Presentation';
import About from '../Sections/About';
import CoursesAndSolutions from '../Sections/CoursesAndSolutions';
import VideoPresentation from '../Sections/VideoPresentation';
import Courses from '../Sections/Courses';
import Feedbacks from '../Sections/Feedbacks';
import Contact from '../Sections/Contact';

const Home = () => {
    return (
        <div id='home'>
           <Presentation />
           <About />
           <CoursesAndSolutions />
           <VideoPresentation />
           <Courses />
           <Feedbacks />
           <Contact />
        </div>
    );
};

export default Home;