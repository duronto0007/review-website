import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className="about">

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <Card.Body>
                    <Card.Title>About</Card.Title>
                    <Card.Text>
                    we have been running our school since 2000. we have been serve more then 10000 student since we have started our school. 
                                we have different types of servie for different type of student
                    </Card.Text>
                </Card.Body>
                
                
                </Card>
        </div>
    );
};

export default About;