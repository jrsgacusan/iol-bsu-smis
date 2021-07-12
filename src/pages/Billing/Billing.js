/* eslint-disable no-unused-vars */
import classes from './Billing.module.css';
import React, { useCallback, useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Cash } from 'react-bootstrap-icons';
import CustomDropDown from '../../components/CustomDropDown';
import BillingModal from './BillingModal';
import Datatable from '../../components/Datatable';
import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
// import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';
import AddComponent from '../../components/AddComponent';
import CardContainer from '../../components/CardContainer';
import { BILLING_DUMMY_DATA } from '../../dummy-data/billing';
import DeleteBtnWithAlert from '../../components/DeleteBtnWithAlert';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { deleteBilling } from '../../store/actions-thunk';

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

const columns = [
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
];

const Billing = () => {
  const billings = useSelector((state) => state.billings);
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const [collected, setcollected] = useState(1000000);
  const [collectibles, setcollectibles] = useState(2000000);
  const [menuItems, setmenuItems] = useState(
    students.map((student) => {
      return {
        name: student.name,
        id: student.id,
      };
    })
  );
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [isTableShown, setisTableShown] = useState(false);
  const [startDate, setstartDate] = useState('01-01-2021');
  const [endDate, setendDate] = useState('01-01-2021');
  const [dataTable, setDataTable] = useState({
    columns: columns,
    rows: [],
  });

  const transformRow = useCallback(
    (list) => {
      const rows = list.map((item) => {
        return {
          paymentId: item.paymentId,
          date: item.date,
          studentId: item.studentId,
          transactionType: item.transactionType,
          description: item.description,
          amount: item.amount,
          balance: item.balance,
          action: (
            <DeleteBtnWithAlert
              action={() => {
                dispatch(deleteBilling(item.paymentId));
              }}
            />
          ),
        };
      });
      return rows;
    },
    [dispatch]
  );

  useEffect(() => {
    const filteredBillings = billings.filter(
      (billing) => billing.studentId === selectedId
    );
    setDataTable({ columns, rows: transformRow(filteredBillings) });
  }, [billings, selectedId, transformRow]);

  const handleSelect = (e) => {
    const selectedItem = JSON.parse(e); //the id in this object will be used to fetch the billing transactions
    const name = selectedItem.name;
    const id = selectedItem.id;
    setSelectedId(id);
    setSelectedStudent(name);
    const filteredBillings = billings.filter(
      (billing) => billing.studentId === id
    );
    console.log(filteredBillings);
    setDataTable({ columns, rows: transformRow(filteredBillings) });
  };

  const handleCallback = (start, end, label) => {
    console.log(start, end, label);
    console.log(start.format('MM-DD-YYYY') + ' to ' + end.format('MM-DD-YYYY'));
    setstartDate(start.format('MM-DD-YYYY'));
    setendDate(end.format('MM-DD-YYYY'));
  };

  return (
    <>
      <BillingModal menuItems={menuItems} />

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
          <CardContainer title="Billing">
            <Row>
              <Col>
                <h4 className="text-center" style={{ fontWeight: 'bold' }}>
                  Search Student
                </h4>
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
                <h4 className="text-center" style={{ fontWeight: 'bold' }}>
                  Sort by Date
                </h4>
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
                <AddComponent
                  title="Add New Transaction"
                  onClick={() => {
                    dispatch({ type: actionTypes.SHOW_MODAL });
                  }}
                />
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
          </CardContainer>
        </Col>
      </Row>
    </>
  );
};

export default Billing;
