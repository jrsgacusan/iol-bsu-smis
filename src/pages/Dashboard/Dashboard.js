import React, { useState } from 'react';
import PendingStudentRegTable from './PendingStudentRegTable';
import { Building, People, Clipboard, Wallet } from 'react-bootstrap-icons';

import { Card, Col, Row } from 'react-bootstrap';
import '../../../src/assets/scss/style.scss';
import Calendar from './Calendar';

const Dashboard = () => {
  const [departmentCount, setDepartmentCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [facultyCount, setFacultyCount] = useState(0);
  const [bouncedSMS, setBouncedSMS] = useState(0);
  const [outboundSMS, setOutboundSMS] = useState(0);
  return (
    <>
      {/* First row */}
      <Row>
        <Col>
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
        <Col>
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
        <Col className="max-col-6">
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
                  className="col-lg-6 col-sm-6 row-in-br d-flex align-items-center px-5"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div className="">
                    <Clipboard
                      style={{
                        padding: '20px',
                        background: 'rgba(255,0,0,0.5)',
                        borderRadius: '20px',
                        margin: '20px',
                      }}
                      size={70}
                      color="white"
                    />
                    <h4>Bounced SMS</h4>
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
                  <div className="">
                    <Wallet
                      style={{
                        padding: '20px',
                        background: 'rgba(0,155,0,0.5)',
                        borderRadius: '20px',
                        margin: '20px',
                      }}
                      size={70}
                      color="white"
                    />
                    <h4>Outbound SMS</h4>
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
          <PendingStudentRegTable />
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
