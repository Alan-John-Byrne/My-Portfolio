import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
// Cert Images
import NvidiaLogo from "../../assets/images/Nvidia Logo.jpg";
import WorldSkillsIrelandLogo from "../../assets/images/World Skills Ireland Logo.jpg";
import JohnHopkinsUniLogo from "../../assets/images/John Hopkins University.png";
import CodecademyLogo from "../../assets/images/Codecademy Logo.jpg";

const CertificatesCard: React.FC = () => {
  return (
    <Card className='flex-fill'>
      <Card.Header>
        <Card.Title className="text-center">Certificates</Card.Title>
      </Card.Header>
      <Card.Body>
        <ListGroup>
          {/* Nvidia Cert */}
          <ListGroup.Item as="a"
            aria-current="false" target="_blank" href="https://courses.nvidia.com/certificates/0468996f54864b959d3548c6538163c1/"
          >
            <Row>
              <Col>
                <h6 className="mb-1">Fundamentals of Deep Learning</h6>
              </Col>
              <Col>
                <small className="text-muted">Nvidia</small>
              </Col>
              <Col>
                <img
                  src={NvidiaLogo}
                  className="rounded"
                  style={{ width: '3rem', height: '3rem' }}
                />
              </Col>
              <Col>
                <small>Date Earned: March 14th, 2023</small>
              </Col>
            </Row>
          </ListGroup.Item>
          {/* Nvidia Cert */}
          <ListGroup.Item as="a"
            aria-current="true"
            target="_blank"
            href="https://www.linkedin.com/in/byrne-alan/overlay/1635502398298/single-media-viewer/?profileId=ACoAADK4RokBxrrlBaKCtyIExSg0HAvXKirsxV8"
          >
            <Row>
              <Col>
                <h6 className="mb-1">
                  Certificate of Excellence AWS Cloud Computing
                  Competition
                </h6>
              </Col>
              <Col>
                <small className="text-muted">
                  Worldskills Ireland
                </small>
              </Col>
              <Col>
                <img
                  src={WorldSkillsIrelandLogo}
                  className="rounded"
                  style={{ width: '3rem', height: '3rem' }}
                  alt="World Skills Ireland Logo"
                />
              </Col>
              <Col>
                <small>Date Earned: September, 2023</small>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item as="a"
            href="https://www.coursera.org/account/accomplishments/verify/WLPZ63CWZUHN"
            target="_blank"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <Row>
              <Col>
                <h6 className="mb-1">
                  HTML, CSS, and JavaScript htmlFor Web Developers
                </h6>
              </Col>
              <Col>
                <small className="text-muted">
                  The John Hopkins University
                </small>
              </Col>
              <Col>
                <img
                  src={JohnHopkinsUniLogo}
                  className="rounded"
                  style={{ width: '3rem', height: '3rem' }}
                />
              </Col>
              <Col>
                <small>Date Earned: June 5th, 2021</small>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item as="a"
            href="https://www.codecademy.com/profiles/Bowser2524/certificates/65f0ff88f4fc58e0536b3b51648dff24"
            target="_blank"
            aria-current="true"
          >
            <Row>
              <Col>
                <h6 className="mb-1">
                  C# Course
                </h6>
              </Col>
              <Col>
                <small className="text-muted">
                  Codecademy
                </small>
              </Col>
              <Col>
                <img
                  src={CodecademyLogo}
                  className="rounded"
                  style={{ width: '3rem', height: '3rem' }}
                  alt="Codecademy Logo"
                />
              </Col>
              <Col>
                <small>Date Earned: May 28, 2022</small>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item as="a"
            href="https://www.codecademy.com/profiles/Bowser2524/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
            target="_blank"
          >
            <Row>
              <Col>
                <h6 className="mb-1">
                  JavaScript Course
                </h6>
              </Col>
              <Col>
                <small className="text-muted">
                  Codecademy
                </small>
              </Col>
              <Col>
                <img
                  src={CodecademyLogo}
                  className="rounded"
                  style={{ width: '3rem', height: '3rem' }}
                  alt="Codecademy Logo"
                />
              </Col>
              <Col>
                <small>Date Earned: May 28, 2022</small>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CertificatesCard;
