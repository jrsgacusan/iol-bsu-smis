/* eslint-disable no-unused-vars */
import classes from './SubjectStudents.module.css';
import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import CardContainer from '../../../components/CardContainer';
import Datatable from '../../../components/Datatable';
import { SUBJ_STUDENTS_DUMMY_DATA } from '../../../dummy-data/subject-students';

const columns = [
  {
    label: 'ID',
    field: 'id',
  },
  {
    label: 'Student',
    field: 'student',
  },
  {
    label: 'Student ID',
    field: 'studentId',
  },
  {
    label: 'Action',
    field: 'action',
  },
];

const SubjectStudents = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: SUBJ_STUDENTS_DUMMY_DATA.map((item) => {
      return {
        id: item.id,
        student: item.student,
        studentId: item.studentId,
        action: 'none',
      };
    }),
  });

  return (
    <>
      {/* First Row */}
      <Row style={{ marginBottom: '25px' }}>
        <Col>
          <Card className={classes.card}>
            <Card.Body className={classes['card-body']}>
              <h3>ADD STUDENT</h3>
              <h4>
                Subject Teacher: <span>{params.get('teachersid')}</span>
              </h4>
              <h4>
                Subject Title: <span>{params.get('subjectid')}</span>
              </h4>
              <div className={classes['form-container']}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label className={classes.label} column sm="3">
                      Student's Name
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control className={classes.control} type="text" />
                    </Col>
                  </Form.Group>

                  <Button style={{ width: '100%' }} variant="primary">
                    Add
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* 
        Second Row */}

      <CardContainer title="STUDENTS">
        <Datatable style={{ boxShadow: 'none' }} datatable={datatable} />
      </CardContainer>
    </>
  );
};

export default SubjectStudents;
