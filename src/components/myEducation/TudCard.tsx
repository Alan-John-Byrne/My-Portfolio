import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import EducationCarousel from "./EducationCarousel";
import React from "react";

const TudCard: React.FC = () => {
  return (
    <>
      <Card.Header>
        <Card.Title className="text-center"> Technological University Dublin, Tallaght Campus </Card.Title>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <EducationCarousel />
            </Col>
          </Row>
          <Row>
            <p className="card-text" style={{ padding: '0rem 3rem 0rem 3rem' }}>
              The Tallaght campus, situated in the southwest of Dublin
              City, spans an 18-hectare site bordered by Old Blessington
              Road, Belgard Road, and Greenhills Road in Tallaght,
              Dublin 24. Established in 1992, the campus hosts over
              5,000 undergraduate students.
            </p>
          </Row>
        </Container>
      </Card.Body>
    </>
  );
}

export default TudCard;
