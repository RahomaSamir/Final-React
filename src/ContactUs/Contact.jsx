import React from 'react';
import './contact.css'; 
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Container>
        <br /><br />
        <h1>Contact Us:</h1>
        <br /><br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>
<br /><br />
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Primary Phone-number</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message here" />
          </Form.Group>
<br /><br />
           <Form.Group controlId="formBasicMessage">
            <Form.Label>Email address</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message here" />
          </Form.Group>
<br /><br />

          <Button variant="dark" type="submit" style={{marginBottom:'90px' , alignContent:'center'}}>
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
