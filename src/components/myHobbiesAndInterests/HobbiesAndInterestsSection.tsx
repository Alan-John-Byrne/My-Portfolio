import React, { useEffect } from 'react';
import HobbiesAndInterestsCarousel from './HobbiesAndInterestsCarousel';
import HobbiesImg from "../../assets/images/hobbies.png";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
// Intersection Animation:
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { Element } from 'react-scroll';
import SectionProps from '../../interfaces/SectionProps';


const HobbiesAndInterestsSection: React.FC<SectionProps> = ({ handleSectionInView }) => {
  // NOTE: Intersection observer for 'when in view' animation.
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  })
  useEffect(() => {
    if (inView) {
      handleSectionInView("HobbiesInterests");
    }
  }, [inView])

  return (
    <>
      <motion.div ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2.6, ease: 'easeOut' }}
      >
        <Card as={Element} name='HobbiesInterests' className="Section-Card">
          <Card.Header>
            <Row className='text-center'>
              <Col>
                <Card.Img style={{ height: '10rem', width: '10rem' }} variant="top" src={HobbiesImg} />
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <Card.Title >Hobbies & Interests</Card.Title>
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
                      <Card.Title className="text-center">Athletics & Fitness</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Container >
                        <Row >
                          <Col className="d-flex justify-content-center">
                            <HobbiesAndInterestsCarousel />
                          </Col>
                        </Row>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Card.Text>
                              I'm big into fitness. I've run for two clubs: Brothers Pearse from 2014
                              to the end of track season in 2019, and Tallaght Athletics Club from September
                              2019 to January 2020. I've competed in the All-Irelands and won some sprinting
                              medals in the Dublins. I play tennis when I can, but these days I mostly do road
                              running and cross country.
                            </Card.Text>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
                {/* End of Dunnes Column */}
                {/* GridBeyond column */}
                {/* IMPORTANT: Put 'd-flex' on the containing column, and 'flex-fill' on an inner card to make that card stretch to fill the space. */}
                <Col className='d-flex'>
                  <Card className='flex-fill'>
                    <Card.Header>
                      <Card.Title className="text-center">Reading</Card.Title>
                    </Card.Header>
                    <Card.Body >
                      <Container>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            <Card.Text>
                              I started reading regularly a couple years ago and have kept it up since.
                              You can find some of the books and their genres below if you're interested.
                              It helps me stay focused and grounded during stressful times, like dealing with daily college life.
                              It's turned out to be a pretty rewarding habit.
                            </Card.Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="d-flex justify-content-center">
                            {/* Reading Accordion */}
                            <Accordion>
                              {/* Thriller */}
                              <Accordion.Item eventKey="0">
                                <Accordion.Header className="wider-accordion-header">Thriller</Accordion.Header>
                                <Accordion.Body>
                                  <ListGroup>
                                    <ListGroup.Item>
                                      Run On Red by Noelle W. Ihli
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      The Overnight Guest by Heather Gudenkauf
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      Lock Every Door by Riley Sager
                                    </ListGroup.Item>
                                  </ListGroup>
                                </Accordion.Body>
                              </Accordion.Item>
                              {/* Horror */}
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>Horror</Accordion.Header>
                                <Accordion.Body>
                                  <ListGroup>
                                    <ListGroup.Item>
                                      Home Before Dark by Riley Sager
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      The Haunting Of Ashburn House by Riley Sager
                                    </ListGroup.Item>
                                  </ListGroup>
                                </Accordion.Body>
                              </Accordion.Item>
                              {/* Fantasy */}
                              <Accordion.Item eventKey="2">
                                <Accordion.Header>Fantasy</Accordion.Header>
                                <Accordion.Body>
                                  <ListGroup>
                                    <ListGroup.Item>
                                      Harry Potter And The Philosopher's Stone by JK Rowling
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      Harry Potter And The Chamber Of Secrets by JK Rowling
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      Harry Potter And The Prisoner Of Azkaban by JK Rowling
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      Harry Potter And The Goblet Of Fire by JK Rowling
                                    </ListGroup.Item>
                                  </ListGroup>
                                </Accordion.Body>
                              </Accordion.Item>
                              {/* Science & Tech */}
                              <Accordion.Item eventKey="3">
                                <Accordion.Header>Science & Tech</Accordion.Header>
                                <Accordion.Body>
                                  <ListGroup>
                                    <ListGroup.Item>
                                      Exploring Raspberry Pi by Derek Molloy
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      Machine Learning For Absolute Beginners by Oliver Theobald
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      Programming The Raspberry Pi, Third Edition: Getting Started With Python by Simon Monk
                                    </ListGroup.Item>
                                  </ListGroup>
                                </Accordion.Body>
                              </Accordion.Item>
                              {/* Fact or Fiction */}
                              <Accordion.Item eventKey="4">
                                <Accordion.Header>Fact or Fiction</Accordion.Header>
                                <Accordion.Body>
                                  <ListGroup>
                                    <ListGroup.Item>
                                      What Do They Really Know by M.S. Morgan
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      UFOs by Leslie Kean
                                    </ListGroup.Item>
                                  </ListGroup>
                                </Accordion.Body>
                              </Accordion.Item>
                              {/* Interpersonal */}
                              <Accordion.Item eventKey="5">
                                <Accordion.Header>Interpersonal</Accordion.Header>
                                <Accordion.Body>
                                  <ListGroup>
                                    <ListGroup.Item>
                                      Show Your Work! by Austin Kleon
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      Un**** Yourself by Gary John Bishop
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      How To Win Friends & Influence People by Dale Carnegie
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                      How To Deal With Difficult People by Gill Hasson
                                    </ListGroup.Item>
                                  </ListGroup>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                            {/* End of Reading Accordion */}
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
                {/* End of GridBeyond column */}
              </Row>
            </Container>
          </Card.Body >
        </Card>
      </motion.div>
    </>
  )
}

export default HobbiesAndInterestsSection;
