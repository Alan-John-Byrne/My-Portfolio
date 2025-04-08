import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactForm from './ContactForm'

interface ContactModalProps {
  show: boolean,
  handleClose: () => void,
}

const ContactModal: React.FC<ContactModalProps> = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <p>
              <i className="bi bi-envelope me-3 fs-3"></i>
              alanjohnbarnesbyrne@gmail.com
            </p>
            <p>
              <i className="bi bi-telephone-fill me-3 fs-3"></i>
              +1 (353) 85 214 7474
            </p>
          </Row>
          <Row>
            <Col>
              <a
                href="https://www.linkedin.com/in/byrne-alan/"
                target="_blank"
              >
                <i className="bi bi-linkedin me-4 fs-1"></i>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/x00167885" target="_blank">
                <i className="bi bi-github fs-1"></i>
              </a>
            </Col>
          </Row>
          <ContactForm />
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

export default ContactModal;
