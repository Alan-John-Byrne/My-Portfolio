import React from "react";
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
// REMEMBER: Animations in the 'react-bootstrap' package are integrated 'under the hood' using
// the 'react-transition-group' package. You DO NOT install 'react-transition-group' seperately.
import Fade from "react-bootstrap/Fade";

interface CustomPopover {
  showDunnesRolesPopover: boolean,
  coords: any,
}

const DunnesRolesPopover: React.FC<CustomPopover> = ({ showDunnesRolesPopover, coords }) => {
  return (
    <>
      <Fade in={showDunnesRolesPopover} unmountOnExit>
        <div
          style={{
            position: 'absolute',
            top: coords.top,
            left: coords.left - 180,
            backgroundColor: 'rgba(255, 100, 100, 0.85)',
            padding: '0.5rem',
            borderRadius: '2rem',
            color: 'black',
          }}>
          <Popover.Header as="h3">
            <Container>
              <Row>
                <Col className="d-flex justify-content-center">
                  Roles
                </Col>
              </Row>
            </Container>
          </Popover.Header>
          <Popover.Body>
            <ListGroup >
              <ListGroup.Item>
                Assisting Managers in monthly stock counting.
              </ListGroup.Item>
              <ListGroup.Item>
                Carrying out monthly special offer stock change overs.
              </ListGroup.Item>
              <ListGroup.Item>
                Working on checkouts.
              </ListGroup.Item>
              <ListGroup.Item>
                Working between frozen, dairy and deli sections.
              </ListGroup.Item>
              <ListGroup.Item>
                Assisting with customer queries.
              </ListGroup.Item>
            </ListGroup>
          </Popover.Body>
        </div>
      </Fade>
    </>
  );
}

export default DunnesRolesPopover;
