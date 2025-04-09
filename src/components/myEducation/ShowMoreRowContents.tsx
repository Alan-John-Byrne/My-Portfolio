import React from 'react';
// Bootstrap Components Used:
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';

const ShowMoreRowContents: React.FC = () => {
  return (
    <>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>
              <Card.Title className="text-center">
                Grades
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <h1 className="text-center">IM A FAILURE, LOL!!!!.</h1>
              <Table>
                { /* Table is populated dynamically with Grade Data */}
                <thead></thead>
                <tbody></tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header >
              <Card.Title className="text-center">
                Skills
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="card-text">
                Below is a brief overview of how I evaluate and measure
                my skillset from an overall perspective. This is not a
                definitive measure of my abilities but provides an idea
                of how I perceive my strengths across different
                categories. While I have personal preferences that may
                influence my assessment, this should give you a general
                sense of my capabilities.
              </p>
            </Card.Body>
            <Card.Footer>
              <ProgressBar striped animated className="my-2" now={65} label="Web Development" />
              <ProgressBar striped animated className="my-2" now={85} label="Machine Learning" />
              <ProgressBar striped animated className="my-2" now={75} label="Mobile Application" />
              <ProgressBar striped animated className="my-2" now={90} label="Data Structures & Algorithms" />
            </Card.Footer>
          </Card>
        </Col>
      </Row >
    </>
  );
}

export default ShowMoreRowContents;
