import React from 'react';
import { useState } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { People } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import EnrollmentTable from '../../components/EnrollmentTable';

const DUMMY_DATA = [
  {
    level: 'Grade 7',
    pending: 0,
    approved: 0,
  },
  {
    level: 'Grade 8',
    pending: 0,
    approved: 0,
  },
  {
    level: 'Grade 9',
    pending: 0,
    approved: 0,
  },
  {
    level: 'Grade 10',
    pending: 0,
    approved: 0,
  },
  {
    level: 'Grade 11',
    pending: 0,
    approved: 0,
  },
  {
    level: 'Grade 12',
    pending: 0,
    approved: 0,
  },
];

const Enrollment = () => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const [data] = useState(
    DUMMY_DATA.map((item) => {
      return {
        level: item.level,
        pending: item.pending,
        approved: item.approved,
        action: (
          <Link to={`/enrollmentlevel?gradelevel=${item.level}`}>
            <Button variant="primary">Review</Button>
          </Link>
        ),
      };
    })
  );
  return (
    <>
      {/* First row */}
      <Row>
        <Col lg={6} sm={6} xs={12}>
          {' '}
          <Card
            style={{
              border: 'none',
              // boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Card.Body>
              <h5 className="mb-4" style={{ fontWeight: 'bold' }}>
                PENDING
              </h5>
              <Row>
                <Col>
                  <People size={70} color="rgba(255,0,0,0.5)" />
                </Col>
                <Col className="text-right">
                  <h2 className="mb-4">0</h2>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} sm={6} xs={12}>
          {' '}
          <Card
            style={{
              border: 'none',
              // boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Card.Body>
              <h5 className="mb-4" style={{ fontWeight: 'bold' }}>
                FINISHED
              </h5>
              <Row>
                <Col>
                  <People size={70} color="rgba(0,155,0,0.5)" />
                </Col>
                <Col className="text-right">
                  <h2 className="mb-4">0</h2>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Second Row */}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row
                style={{
                  alignItems: 'center',
                }}
              >
                <Col xs={8}>
                  <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    Enrollment Registrations
                  </h1>
                </Col>
                <Col
                  xs={4}
                  style={{ justifyContent: 'flex-end', display: 'flex' }}
                >
                  <Form.Control style={{ width: '215px' }} required as="select">
                    <option>2020-2021</option>
                  </Form.Control>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer
              style={{ background: `${isDarkMode ? '#2d2f31' : '#F7FAFC'}` }}
            >
              <EnrollmentTable data={data} />
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Enrollment;
