import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import TUDLogo from '../../assets/images/TUD Logo.png'

interface DunnesRecommendationsModalProps {
  show: boolean,
  handleClose: () => void,
}

const DunnesRecommendationsModal: React.FC<DunnesRecommendationsModalProps> = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recommendations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Brian Gahan */}
          <Card>
            <Card.Header>
              <Container>
                <Row className="d-flex align-items-center">
                  <Col className="d-flex justify-content-center">
                    <Image src={`${TUDLogo}`} rounded-circle style={{ width: "4rem", height: "4rem", border: "0.3rem solid red", borderRadius: "3rem", objectFit: "cover" }} />
                  </Col>
                  <Col>
                    Brian Gahan, CIO (<strong><u>My Manager</u></strong>)
                  </Col>
                </Row>
              </Container>
            </Card.Header>
            <Card.Body>
              <Card.Text as="h5">What are some of the things Alan does well?</Card.Text>
              <Card.Text>
                Agility in terms of ability to do context switching and understand different parts of the business and different requirements.
                Strong technical skills in software development, has delivered meaningful results in a number of areas.
                Great attitude, pleasure to work with and well liked and respected by his colleagues and team mates.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          {/* End of Brian Gahan */}
          {/* Laura Merriman */}
          <Card>
            <Card.Header>
              <Container>
                <Row className="d-flex align-items-center">
                  <Col className="d-flex justify-content-center">
                    <Image src={`${TUDLogo}`} rounded-circle style={{ width: "4rem", height: "4rem", border: "0.3rem solid red", borderRadius: "3rem", objectFit: "cover" }} />
                  </Col>
                  <Col>
                    Laura Merriman
                  </Col>
                </Row>
              </Container>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                I would not hesitate to recommend Alan for future employment.
                During his time at GridBeyond he successfully closed out project tasks such as change management,
                Solar PV forecasting and HRIS management. His work was completed to the highest standards and he built
                engaging relationships with all levels of the business including senior stakeholders.
                We wish Alan the best of luck moving forward and would rehire if the right opportunity arose.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          {/* End of Laura Merriman */}
          {/* Ricardo Rosa */}
          <Card>
            <Card.Header>
              <Container>
                <Row className="d-flex align-items-center">
                  <Col className="d-flex justify-content-center">
                    <Image src={`${TUDLogo}`} rounded-circle style={{ width: "4rem", height: "4rem", border: "0.3rem solid red", borderRadius: "3rem", objectFit: "cover" }} />
                  </Col>
                  <Col>
                    Ricardo Rosa
                  </Col>
                </Row>
              </Container>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                I had the opportunity to work with Alan during his internship at Gridbeyond and I was very impressed
                by his performance and potential. Alan is a committed, intelligent, and hard-working professional who always delivers
                high-quality results. He is pro-active in taking initiatives, and learning new skills. He is always available to help
                his colleagues with any issues or questions. He demonstrates a high level of professionalism and critical thinking in
                every task he undertakes. He is also a good colleague who is friendly, respectful, humble, and supportive of his team members.
                Alan is a valuable person to any organization and I highly recommend him for any future opportunities.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          {/* End of Ricardo Rosa */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal >
    </>
  )
}

export default DunnesRecommendationsModal;
