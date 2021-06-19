import React, { useState } from 'react';
import Datatable from '../../components/Datatable';
import { Building, People, Clipboard, Wallet } from 'react-bootstrap-icons';

import { Card, Col, Row } from 'react-bootstrap';
// import '../../../src/assets/scss/style.scss';
import Calendar from './Calendar';
import classes from './Dashboard.module.css';
import { DASHBOARD_DUMMY_DATA } from '../../dummy-data/dashboard';
const columns = [
  {
    label: 'ID',
    field: 'id',
    attributes: {
      'aria-controls': 'DataTable',
      'aria-label': 'ID',
    },
  },
  {
    label: 'LRN',
    field: 'lrn',
  },
  {
    label: 'Department Name',
    field: 'deptName',
  },
  {
    label: 'Name',
    field: 'name',
    sort: 'asc',
  },
  {
    label: 'Contact Number',
    field: 'contactNum',
    sort: 'disabled',
  },
  {
    label: 'Email',
    field: 'email',
    sort: 'disabled',
  },
  {
    label: 'Action',
    field: 'action',
    sort: 'disabled',
  },
];

const Dashboard = () => {
  const [departmentCount, setDepartmentCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [facultyCount, setFacultyCount] = useState(0);
  const [bouncedSMS, setBouncedSMS] = useState(0);
  const [outboundSMS, setOutboundSMS] = useState(0);
  const [datatable, setDatatable] = useState({
    columns: columns,
    rows: DASHBOARD_DUMMY_DATA.map((item) => {
      return {
        id: item.id,
        lrn: item.lrn,
        deptName: item.deptName,
        name: item.name,
        contactNum: item.contactNum,
        email: item.email,
        action: 'none',
      };
    }),
  });
  return (
    <>
      {/* First row */}
      <Row>
        <Col xs={12} lg={4} sm={6}>
          <Card
            style={{
              border: 'none',
              // boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Card.Body>
              <h5 className="mb-4">DEPARTMENTS</h5>
              <div className="row d-flex align-items-center">
                <div className="col-9">
                  <Building size={70} color="purple" />
                  {/* <i class="fa fa-building text-purple" /> */}
                </div>
                <div className="col-3 text-right">
                  <h2 className="mb-4">{departmentCount}</h2>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4} sm={6}>
          <Card style={{ border: 'none' }}>
            <Card.Body>
              <h5 className="mb-4">STUDENTS</h5>
              <div className="row d-flex align-items-center">
                <div className="col-9">
                  <People size={70} color="rgba(255,0,0,0.5)" />
                  {/* <i class="fa fa-building text-purple" /> */}
                </div>
                <div className="col-3 text-right">
                  <h2 className="mb-4">{studentCount}</h2>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4} sm={6}>
          <Card style={{ border: 'none' }}>
            <Card.Body>
              <h5 className="mb-4">FACULTY</h5>
              <div className="row d-flex align-items-center">
                <div className="col-9">
                  <People size={70} color="rgba(0,155,0,0.5)" />
                  {/* <i class="fa fa-building text-purple" /> */}
                </div>
                <div className="col-3 text-right">
                  <h2 className="mb-4">{facultyCount}</h2>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Second Row */}
      <Row>
        <Col className="sm-12">
          <Card style={{ border: 'none' }}>
            <Card.Body>
              <div className="row d-flex ">
                <div
                  className={
                    classes.leftContent +
                    ` col-lg-6 col-sm-6 row-in-br d-flex align-items-center px-5`
                  }
                  style={{
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <Clipboard
                      style={{
                        padding: '20px',
                        background: 'rgba(255,0,0,0.5)',
                        borderRadius: '20px',
                        marginBottom: '10px',
                        marginRight: '10px',
                      }}
                      size={70}
                      color="white"
                    />
                    <h5 className="text-muted pr-5">Bounced SMS</h5>
                  </div>
                  <div>
                    <h2>{bouncedSMS}</h2>
                  </div>
                </div>

                {/* Add the second div here */}
                <div
                  className="col-lg-6 col-sm-6 row-in-br d-flex align-items-center px-5"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <Wallet
                      style={{
                        padding: '20px',
                        background: 'rgba(0,155,0,0.5)',
                        borderRadius: '20px',
                        marginBottom: '10px',
                        marginRight: '10px',
                      }}
                      size={70}
                      color="white"
                    />
                    <h5 className="text-muted pr-5">Outbound SMS</h5>
                  </div>
                  <div>
                    <h2>{outboundSMS}</h2>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Third Row */}

      <Row>
        {/* Table of details */}
        <div className="col-md-8">
          <Datatable
            datatable={datatable}
            title="Pending Student Registration"
          />
        </div>

        {/* Calendar*/}
        <div className="col-md-4">
          <Calendar />
        </div>
      </Row>
    </>
  );
};

export default Dashboard;
