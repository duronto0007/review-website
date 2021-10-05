import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    console.log(props.paidCourse)
    return (
        <div>
            <Col>
      <Card>
        <Card.Img variant="top" src={props.paidCourse.img} />
        <Card.Body>
          <Card.Title>{props.paidCourse.subject}</Card.Title>
            <h4>Course Fee: ${props.paidCourse.courseFee}</h4>
            <h5>Durition: {props.paidCourse.duriton}</h5>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Course;