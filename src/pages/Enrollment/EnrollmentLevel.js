import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { People } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Datatable from '../../components/Datatable';
import { ENROLLMENT_LEVEL_DUMMY_DATA } from '../../dummy-data/enrollment-level';

const columns = [
  {
    label: 'Enrollment ID',
    field: 'enrollmentId',
  },
  {
    label: 'User ID',
    field: 'userId',
  },
  {
    label: 'Name',
    field: 'name',
  },
  {
    label: 'Age',
    field: 'age',
  },
  {
    label: 'Section',
    field: 'section',
  },
  {
    label: 'Year Level',
    field: 'yearLevel',
  },
  {
    label: 'Last School Attended',
    field: 'lastSchool',
  },
  {
    label: 'Address',
    field: 'address',
  },
  {
    label: 'Status',
    field: 'status',
  },
  {
    label: 'Action',
    field: 'action',
  },
];

const EnrollmentLevel = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: ENROLLMENT_LEVEL_DUMMY_DATA.map(function(item) {
      return (
        item.yearLevel === params.get('gradelevel') && {
          enrollmentId: item.enrollmentId,
          userId: item.userId,
          name: item.name,
          age: item.age,
          section: item.section,
          yearLevel: item.yearLevel,
          lastSchool: item.lastSchool,
          address: item.address,
          status: item.status,
          action: (
            <Link
              to={`/reviewenrollment?id=${item.userId}&eid=${
                item.enrollmentId
              }`}
            >
              <Button variant="warning">Review</Button>
            </Link>
          ),
        }
      );
    }),
  });

  return (
    <>
      {' '}
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
      {/* second row */}
      <Row>
        <Col>
          <Datatable
            datatable={datatable}
            title={`Pending Student Enrollment of ${params.get('gradelevel')}`}
          />
        </Col>
      </Row>
    </>
  );
};

export default EnrollmentLevel;
