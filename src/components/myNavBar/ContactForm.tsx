import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';

const ContactForm: React.FC = () => {
  return (
    <>
      <br />
      <br />
      <Form >
        <p className="text-start">
          <h4 >Get In Touch!</h4>
        </p>
        <Form.Group className="mb-3" controlId="Name">
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="Enter First Name" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Enter Last Name" />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control placeholder="Enter email" />
              <Form.Text >
                Email won't be shared.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="Comments">
            <Form.Label>Comments, Questions?</Form.Label>
            <Form.Control as='textarea' />
            <Form.Text>
              Please don't hesitate to ask any questions if interested! I'll reach back out as soon as possible.
            </Form.Text>
          </Form.Group>
        </Row>
      </Form >
    </>
  )
}

export default ContactForm;
