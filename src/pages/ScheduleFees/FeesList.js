/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import CardContainer from '../../components/CardContainer';
import Datatable from '../../components/Datatable';
import DeleteBtnWithAlert from '../../components/DeleteBtnWithAlert';

const columns = [
  { label: 'ID', field: 'id' },
  { label: 'Fee Description', field: 'feeDescription' },
  { label: 'Amount', field: 'amount' },
  { label: 'Action', field: 'action' },
];

const rows = [
  {
    id: '0000000064',
    feeDescription: 'Educational Resource Fund (ERF)',
    amount: '3000.00',
  },
  { id: '0000000063', feeDescription: 'Miscellaneous Fees', amount: '2290.00' },
];

const FeesList = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: rows.map((item) => {
      return {
        id: item.id,
        feeDescription: item.feeDescription,
        amount: item.amount,
        action: <DeleteBtnWithAlert action={() => {}} />,
      };
    }),
  });
  return (
    <>
      {/* FIRST ROW */}
      <Row>
        {/* LEFT CONTENT */}
        <Col md={6} xs={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <h4
                    className="text-center"
                    style={{ fontSize: '16px', fontWeight: 'bold' }}
                  >
                    {params.get('gradelevel').toUpperCase()}
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form>
                    <Form.Group>
                      <Form.Label>Fee Description</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Amount</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                    <Button variant="primary">Add Fee</Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* RIGHT CONTENT */}
        <Col md={6} xs={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <h4
                    className="text-center"
                    style={{ fontSize: '16px', fontWeight: 'bold' }}
                  >
                    DOWNPAYMENT
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form>
                    <Form.Group>
                      <Form.Label>Amount</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Update
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* SECOND ROW  */}
      <Row>
        <Col>
          <CardContainer title="FEES">
            <Datatable datatable={datatable} />
          </CardContainer>
        </Col>
      </Row>
    </>
  );
};

export default FeesList;
