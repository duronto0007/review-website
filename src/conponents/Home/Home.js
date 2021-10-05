import React from 'react';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import Events from '../Events/Events';
import './Home.css';
import useCourse from '../../Hooks/UseCourse';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Home = () => {
    const [course, setCourse] = useCourse([]);
    return (
        <div className="home">
         <div className="main-section">
            <h1 className="heading">Country's best <span className="span">  Children Development Center</span></h1>
            <p className="para">We are one of the best children Developmet center in Bangladesh. <br/>We are welcoming your kinds in our School.</p>
         </div>
            <Events></Events>
            <div>
                
            <Row xs={1} md={3} className="g-4">
             
             {
                 course.map(paidCourse =><Course paidCourse={paidCourse}></Course>)
             }
             </Row>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;