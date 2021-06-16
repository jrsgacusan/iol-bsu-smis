import React from 'react';
import { Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import DepartmentAdmin from './DepartmentAdmin';
import classes from './DepartmentDetails.module.css';
import Faculty from './faculty/Faculty';
import Students from './Students';
import Cashier from './Cashier';
const DepartmentDetails = () => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <h1 className={classes.title}>DEPARTMENT FACULTY</h1>
            <Tabs
              className={classes['nav-tabs']}
              defaultActiveKey="faculty"
              id="uncontrolled-tab-example"
            >
              <Tab eventKey="faculty" title="Faculty">
                <Faculty />
              </Tab>
              <Tab eventKey="students" title="Students">
                <Students />
              </Tab>
              <Tab eventKey="deptAdmin" title="Department Admin">
                <DepartmentAdmin />
              </Tab>
              <Tab eventKey="cashier" title="Cashier">
                <Cashier />
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DepartmentDetails;
