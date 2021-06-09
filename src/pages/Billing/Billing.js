import classes from './Billing.module.css';
import React, { useState, Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Wallet2, Cash, PlusLg, Trash } from 'react-bootstrap-icons';
import CustomDropDown from '../../components/CustomDropDown';
import BillingModal from './BillingModal';
import Datatable from '../../components/Datatable';
import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';

const DUMMY_MENU = [
  {
    name: 'Juel Rei S. Gacusan',
    id: '1dsscxzv1q23',
  },
  {
    name: 'James Reid',
    id: 'asdf123zxc',
  },
  {
    name: 'Daniel Padilla',
    id: 'zcxvza23',
  },
];

const Billing = () => {
  const [collected, setcollected] = useState(1000000);
  const [collectibles, setcollectibles] = useState(2000000);
  const [menuItems, setmenuItems] = useState(DUMMY_MENU);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalShown, setisModalShown] = useState(false);
  const [isTableShown, setisTableShown] = useState(false);
  const [startDate, setstartDate] = useState('01-01-2021');
  const [endDate, setendDate] = useState('01-01-2021');
  const [dataTable, setDataTable] = useState({
    columns: [
      {
        label: 'Payment ID',
        field: 'paymentId',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'paymentId',
        },
      },
      {
        label: 'Date',
        field: 'date',
      },
      {
        label: 'Student ID',
        field: 'studentId',
      },
      {
        label: 'Transaction Type',
        field: 'transactionType',
      },
      {
        label: 'Description',
        field: 'description',
      },
      {
        label: 'Amount',
        field: 'amount',
      },
      {
        label: 'Balance',
        field: 'balance',
      },
      {
        label: 'Action',
        field: 'action',
      },
    ],
    rows: [
      {
        paymentId: '96',
        date: '	2020-07-02 09:51:50',
        studentId: '10002',
        transactionType: 'Billing',
        description: 'Grade 11',
        amount: 200,
        balance: 10000,
        action: (
          <Button variant="danger" onClick={() => alert('Button clicked')}>
            <Trash color="white" />
          </Button>
        ),
      },
    ],
  });

  const handleSelect = (e) => {
    setSelectedStudent(e);
    console.log(e);
  };

  const handleCallback = (start, end, label) => {
    console.log(start, end, label);
    console.log(start.format('MM-DD-YYYY') + ' to ' + end.format('MM-DD-YYYY'));
    setstartDate(start.format('MM-DD-YYYY'));
    setendDate(end.format('MM-DD-YYYY'));
  };

  return (
    <>
      <BillingModal
        onHide={() => {
          setisModalShown(false);
        }}
        isModalShown={isModalShown}
        menuItems={menuItems}
      />

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
                COLLECTED
              </h5>
              <Row>
                <Col>
                  <Cash size={70} color="rgba(0,155,0,0.5)" />
                </Col>
                <Col className="text-right">
                  <h2 className="mb-4">{collected}</h2>
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
                COLLECTIBLES
              </h5>
              <Row>
                <Col>
                  <Cash size={70} color="rgba(255,0,0,0.5)" />
                </Col>
                <Col className="text-right">
                  <h2 className="mb-4">{collectibles}</h2>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Second Row */}
      <Row>
        <Col>
          <Card className={classes['second-row-card']}>
            <Card.Header
              style={{ background: '#2cabe3' }}
              className={classes['second-row-header']}
            >
              <Wallet2 size={30} color="white" className={classes.wallet} />
              <p>BILLING</p>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <h4 className="text-center">Search Student</h4>
                  <CustomDropDown
                    placeHolder="Search student"
                    menuItems={menuItems}
                    handleSelect={handleSelect}
                    selectedItem={selectedStudent}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <h4 className="text-center">Sort by Date</h4>
                  <DateRangePicker
                    onCallback={handleCallback}
                    initialSettings={{
                      startDate: startDate,
                      endDate: endDate,
                    }}
                  >
                    <button className={classes['date-picker-btn']}>
                      {startDate}/{endDate}
                    </button>
                  </DateRangePicker>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  {' '}
                  <Button
                    className="text-center"
                    style={{
                      marginTop: '10px',
                      background: '#707cd2',
                      border: 'none',
                    }}
                    onClick={() => {
                      setisTableShown(true);
                    }}
                  >
                    View{' '}
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span
                    className={classes['add-new-transaction']}
                    onClick={() => {
                      setisModalShown(true);
                    }}
                  >
                    <PlusLg className={classes.icon} size={50} />
                    <p>Add new Transaction</p>
                  </span>
                </Col>
              </Row>
              {isTableShown && (
                <Row style={{ marginTop: '10px' }}>
                  <Col>
                    <Datatable
                      datatable={dataTable}
                      title="Transactions"
                      exportToCsv={true}
                    />
                  </Col>
                </Row>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Billing;
