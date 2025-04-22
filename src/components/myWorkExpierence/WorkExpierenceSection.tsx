import React, { useState, useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LapTop from "../../assets/images/Laptop.png";
// Custom Components:
import DunnesRolesPopover from './DunnesRolesPopover';
import DunnesRecommendationsModal from './DunnesRecommendationsModal';
import DunnesCarousel from './DunnesCarousel';
import GridBeyondCarousel from './GridBeyondCarousel';
// Intersection Animation:
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { Element } from 'react-scroll';
import SectionProps from '../../interfaces/SectionProps';

const WorkExpierenceSection: React.FC<SectionProps> = ({ handleSectionInView }) => {

  // NOTE: Intersection observer for 'when in view' animation.
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      handleSectionInView("Work-Expierence");
    }
  }, [inView])

  // RecommendationsModel State management:
  const [showRecommendationsModal, setShowRecommendationsModal] = useState(false);
  const toggleRecommendationsModel = () => setShowRecommendationsModal(!showRecommendationsModal);

  // WARN: Custom Popover required, animations are NOT available via parent 'Popover' component. Nor via 'Framer Motion' / 'Motion'.
  // IMPORTANT: DunnesRolesPopover State management:
  const [showDunnesRolesPopover, setShowDunnesRolesPopover] = useState(false); // Status for showing the custom popover.
  const [coords, setCoords] = useState({ top: 0, left: 0 });  // Initial co-ordinates for the button trigger unknown.anyany
  const dunnesRolesPopoverButtonRef = useRef<HTMLButtonElement>(null);      // Retrieve the actual buttom object from the 'real' DOM.any
  // Toggler / handler for controlling popover.
  const toggleDunnesRolesPopover = () => {
    const rect = dunnesRolesPopoverButtonRef.current?.getBoundingClientRect(); // Retrieving a 'DOMRect' object that surrounds the buttom element.
    // Checking if the button is mounted, if so we can get a DOMRect object from it.
    if (rect) {
      setCoords({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    } else {
      setCoords({ top: 0 + window.scrollY, left: 0 + window.scrollX });
    }
    // Finally opening or closing the popover.
    setShowDunnesRolesPopover(!showDunnesRolesPopover);
  }

  return (
    <>
      <motion.div ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2.6, ease: 'easeOut' }}
      >
        <Card as={Element} name='Work-Expierence' className="Section-Card">
          <Card.Header>
            <Row className='text-center'>
              <Col>
                <Card.Img style={{ height: '10rem', width: '10rem' }} variant="top" src={LapTop} />
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <Card.Title >Work Expierence</Card.Title>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Container>
              {/* Start of 1st Row */}
              <Row>
                {/* Dunnes Column */}
                <Col>
                  <Card >
                    <Card.Header>
                      <Card.Title className="text-center">Dunnes Stores</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Container >
                        <Row >
                          <Col className="d-flex justify-content-center">
                            <DunnesCarousel />
                          </Col>
                        </Row>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Card.Text>
                              I worked for Dunnes Stores from September 2019, through
                              the Covid-19 to Feburary of 2021. Here I assisted
                              customers and kept the shelves stocked. I assisted the
                              managers in taking stock of the latest supply, I worked on
                              checkouts during the busy seasons such as christmas. I
                              worked mostly on the shop floor stocking shelves from
                              frozen, deli, dairy and minerals.
                            </Card.Text>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                    <Card.Footer>
                      <Container>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            {/* DunnesPopOver Toggle */}
                            <Button ref={dunnesRolesPopoverButtonRef} onClick={toggleDunnesRolesPopover}>{showDunnesRolesPopover ? "Hide Roles" : "View Roles"}</Button>
                            {/* DunnesPopOver */}
                          </Col>
                        </Row>
                      </Container>
                    </Card.Footer>
                  </Card>
                  <DunnesRolesPopover showDunnesRolesPopover={showDunnesRolesPopover} coords={coords} />
                </Col>
                {/* End of Dunnes Column */}
                {/* GridBeyond column */}
                {/* IMPORTANT: Put 'd-flex' on the containing column, and 'flex-fill' on an inner card to make that card stretch to fill the space. */}
                <Col className='d-flex'>
                  <Card className='flex-fill'>
                    <Card.Header>
                      <Card.Title className="text-center">GridBeyond</Card.Title>
                    </Card.Header>
                    <Card.Body >
                      <Container>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <GridBeyondCarousel />
                          </Col>
                        </Row>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Card.Text>
                              I worked with a team of 16 people, including data
                              scientists, data engineers, data architects, cloud
                              engineers, systems analysts and contractors. During this
                              time I gained so much insight into the day to day running
                              of an IT department. I had the oppurtunity to partake in
                              data admisitrative work. A phenomenal expierence all
                              round.
                            </Card.Text>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                    <Card.Footer>
                      <Container>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Button variant="primary" onClick={toggleRecommendationsModel}>Show Recommendations</Button>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Footer>
                  </Card>
                </Col>
                {/* End of GridBeyond column */}
              </Row>
            </Container>
          </Card.Body >
        </Card >
        <DunnesRecommendationsModal show={showRecommendationsModal} handleClose={toggleRecommendationsModel} />
      </motion.div>
    </>
  )
}

export default WorkExpierenceSection;

