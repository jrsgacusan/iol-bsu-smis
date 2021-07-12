import React, { useState } from 'react';
import { Col, Row, Card, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CardContainer from '../../components/CardContainer';
import Datatable from '../../components/Datatable';

const columns = [
  { label: 'ID', field: 'id' },
  { label: 'Student', field: 'studentName' },
  { label: 'StudentID', field: 'studentId' },
  { label: 'Action', field: 'action' },
];
const rows = [];

const SectionStudents = ({ location }) => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: rows,
  });
  const params = new URLSearchParams(location.search);
  return (
    <>
      {/* first row */}
      <Row>
        <Col md={{ span: 6, offset: 3 }} xs={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col
                  className="text-center"
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: `${isDarkMode ? 'white' : 'black'}`,
                  }}
                >
                  ADD STUDENT
                </Col>
              </Row>
              <Row>
                <Col
                  className="text-center"
                  style={{
                    fontSize: '14px',
                    color: `${isDarkMode ? 'white' : 'black'}`,
                  }}
                >
                  {/* change the 7-1 with dynamic value soon  */}
                  Section:
                  <span style={{ fontWeight: 'bold' }}>
                    {' '}
                    {params.get('level')} 7-1
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form>
                    <Form.Group>
                      <Form.Label
                        style={{ color: `${isDarkMode ? 'white' : 'black'}` }}
                      >
                        Student's Name
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Button variant="primary">Add</Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* second row */}
      <CardContainer title="STUDENTS">
        <Datatable datatable={datatable} />
      </CardContainer>
    </>
  );
};

export default SectionStudents;
