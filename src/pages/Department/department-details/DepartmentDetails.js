import React, { useState } from 'react';
import { Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import DepartmentAdmin from './department-admin/DepartmentAdmin';
import DepartmentDetailsModal from './DepartmentDetailsModal';
import classes from './DepartmentDetails.module.css';
import Faculty from './faculty/Faculty';
import Students from './students/Students';
import Cashier from './cashier/Cashier';

import { sweetConfirmHandler } from '../../../components/DeleteBtnWithAlert';
import { FACULTY_DUMMY_DATA } from '../../../dummy-data/department-details';

const initialValue = {
  id: '',
  firstName: '',
  midName: '',
  lastName: '',
  address: '',
  personToContact: '',
  emergencyNum: '',
  role: '',
  sy: '',
};

const DepartmentDetails = () => {
  const [isModalShown, setisModalShown] = useState(false);
  const [data, setData] = useState(initialValue);

  const showModal = () => {
    setisModalShown(true);
  };
  const editAction = (data) => {
    setData(data);
    setisModalShown(true);
    console.log(data);
  };

  const action = () => {
    alert('deleted!');
  };

  const deleteAction = () => {
    sweetConfirmHandler(action);
  };

  return (
    <>
      <DepartmentDetailsModal
        data={data}
        onHide={() => {
          setisModalShown(false);
          setData(initialValue);
        }}
        isModalShown={isModalShown}
      />
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
                  <Faculty
                    showModal={showModal}
                    list={FACULTY_DUMMY_DATA}
                    deleteAction={deleteAction}
                    editAction={editAction}
                  />
                </Tab>
                <Tab eventKey="students" title="Students">
                  <Students
                    list={FACULTY_DUMMY_DATA}
                    deleteAction={deleteAction}
                    editAction={editAction}
                  />
                </Tab>
                <Tab eventKey="deptAdmin" title="Department Admin">
                  <DepartmentAdmin
                    list={FACULTY_DUMMY_DATA}
                    deleteAction={deleteAction}
                    editAction={editAction}
                  />
                </Tab>
                <Tab eventKey="cashier" title="Cashier">
                  <Cashier
                    list={FACULTY_DUMMY_DATA}
                    deleteAction={deleteAction}
                    editAction={editAction}
                  />
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DepartmentDetails;
