import React from 'react';
import CustomModal from '../../components/CustomModal';
import { Form, Modal, Button } from 'react-bootstrap';
const PaymentTransactionsModal = ({ isModalShown, onHide }) => {
  return (
    <CustomModal
      isModalShown={isModalShown}
      onHide={onHide}
      title="Transaction ID"
    >
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Student</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Transaction Reference Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="success">Save</Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default PaymentTransactionsModal;
