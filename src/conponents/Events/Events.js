import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import'./Events.css';

const Events = () => {
    return (
        <div className="events">
     <h1>Our Events</h1>
 <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Card.Body>
      <Card.Title>Social culture</Card.Title>
      <Card.Text>
        we have running differnt type of social events for our new and old student so that our student can learn social thing very well.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/942419/pexels-photo-942419.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Card.Body>
      <Card.Title>Sports Culture</Card.Title>
      <Card.Text>
        We are running different types of sports culture so that we can introdue our students with differnt types of sports.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.pexels.com/photos/7742832/pexels-photo-7742832.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <Card.Body>
      <Card.Title>Creative Culture</Card.Title>
      <Card.Text>
        We have running differnt types of creative culturing events for our every single students so that our students can learn new thing
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
        </div>
    );
};

export default Events;