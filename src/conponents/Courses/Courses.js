import React from 'react';
import { Row } from 'react-bootstrap';
import useCourse from '../../Hooks/UseCourse';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
      const [course, setCourse] = useCourse([]);
    return (
        <div className="course">

            <h1>Our Courses</h1>

            <Row xs={1} md={3} className="g-4">
             
            {
                course.map(paidCourse =><Course paidCourse={paidCourse}></Course>)
            }
            </Row>
        </div>
    );
};

export default Courses;