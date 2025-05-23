import React, { useState, useEffect } from "react";
// Section Header Image:
import GraduationHat from "../../assets/images/Graduation Hat.png";
// Bootstrap Components Used:
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
// Custom Components:
import CertificatesCard from "./CertificatesCard";
import TudCard from "./TudCard";
import ShowMoreRowContents from "./ShowMoreRowContents.tsx";
// Intersection Animation:
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { Element } from "react-scroll";
import SectionProps from '../../interfaces/SectionProps';

const EducationSection: React.FC<SectionProps> = ({ handleSectionInView }) => {

  // Show more button state:
  const [open, setOpen] = useState(false);
  const OpenShowMore = () => setOpen(true);
  const CloseShowMore = () => setOpen(false);

  // NOTE: Intersection observer for 'when in view' animation.
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      handleSectionInView("Education");
    }
  }, [inView])

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2.6, ease: 'easeOut' }}
    >
      <Card as={Element} name='Education' className='Section-Card'>
        <Card.Header>
          <Row className='text-center'>
            <Col>
              <Card.Img style={{ height: '10rem', width: '10rem' }} variant="top" src={GraduationHat} />
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <Card.Title>Education</Card.Title>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Container>
            {/* Start of 1st Row */}
            <Container>
              <Row>
                {/* Certificates Column */}
                <Col className='d-flex'>
                  <CertificatesCard />
                </Col>
                {/* End of Certificates Column */}
                {/* TUD Campus column */}
                <Col>
                  <Card>
                    {/* Keeping Tud Info seperate */}
                    <TudCard />
                    <Card.Footer className='d-flex justify-content-center'>
                      {/* Show More Functionality */}
                      {open ? (
                        <Button
                          onClick={CloseShowMore}
                          aria-controls="example-collapse-text"
                          aria-expanded={open}
                        >
                          Show More
                        </Button>
                      ) : (
                        <Button
                          onClick={OpenShowMore}
                          aria-controls="example-collapse-text"
                          aria-expanded={open}
                        >
                          Show More
                        </Button>
                      )}
                    </Card.Footer>
                  </Card>
                </Col>
                {/* End of TUD Campus column */}
              </Row>
            </Container>
            {/* End of 1st Row */}
            {/* Dynamically Showing appearance of 2nd Row */}
            <Collapse in={open}>
              {/* Show More Section (2nd Row) */}
              <Container>
                <ShowMoreRowContents />
              </Container>
              {/* End Of Show More Section (2nd Row) */}
            </Collapse>
          </Container>
        </Card.Body>
      </Card>
    </motion.div >
  )
}

export default EducationSection;
