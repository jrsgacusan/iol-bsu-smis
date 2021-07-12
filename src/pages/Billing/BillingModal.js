import React, { useState } from 'react';
import { Form, Modal, Button, Alert } from 'react-bootstrap';
import CustomModal from '../../components/CustomModal';
import CustomDropDown from '../../components/CustomDropDown';
import { useDispatch } from 'react-redux';
import { addBilling } from '../../store/actions-thunk';
import * as actionTypes from '../../store/actions';

const BillingModal = ({ menuItems }) => {
  const dispatch = useDispatch();
  const [selectedStudentInModal, setselectedStudentInModal] = useState(null);
  const [selectedRadio, setselectedRadio] = useState('billing');
  const [numOrDescription, setnumOrDescription] = useState('');
  const [amount, setamount] = useState(0);
  const [id, setid] = useState(null);
  const [error, seterror] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  const handleSelect = (e) => {
    const selectedItem = JSON.parse(e); //the id in this object will be used to fetch the billing transactions
    const name = selectedItem.name;
    const id = selectedItem.id;
    setselectedStudentInModal(name);
    setid(id);
  };

  const handleRadioOnChange = (e) => {
    console.log(e.currentTarget.id);
    setselectedRadio(e.currentTarget.id);
  };

  const handleOrDesc = (e) => {
    setnumOrDescription(e.target.value);
  };
  const handleAmount = (e) => {
    setamount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    seterror(false);

    if (!id) {
      seterror(true);
      seterrorMessage('Please select a student.');
      return;
    }
    if (amount <= 0) {
      seterror(true);
      seterrorMessage('Amount must be higher than 0.');
      return;
    }
    //no error
    let current = new Date();
    let cDate =
      current.getFullYear() +
      '-' +
      (current.getMonth() + 1) +
      '-' +
      current.getDate();
    let cTime =
      current.getHours() +
      ':' +
      current.getMinutes() +
      ':' +
      current.getSeconds();
    let dateTime = cDate + ' ' + cTime;

    const data = {
      amount: amount,
      date: dateTime,
      description: numOrDescription,
      balance: 1000000,
      studentId: id,
      transactionType: selectedRadio,
    };

    dispatch(addBilling(data));
    customOnHide();
    dispatch({ type: actionTypes.SHOW_MODAL });
  };
  const customOnHide = () => {
    setselectedStudentInModal(null);
    setselectedRadio('billing');
    setnumOrDescription('');
    setamount(0);
    setid(null);
  };

  return (
    <CustomModal title="Add New Billing" customOnHide={customOnHide}>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{errorMessage}</Alert>}
          <Form.Group>
            <Form.Label style={{ fontWeight: 'bold' }}>Student</Form.Label>
            <CustomDropDown
              placeHolder="Search student"
              menuItems={menuItems}
              handleSelect={handleSelect}
              selectedItem={selectedStudentInModal}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontWeight: 'bold' }}>Transaction</Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Billing"
                name="group1"
                type="radio"
                id="billing"
                checked={selectedRadio === 'billing'}
                onChange={handleRadioOnChange}
              />
              <Form.Check
                onChange={handleRadioOnChange}
                inline
                label="Payment"
                name="group1"
                type="radio"
                id="payment"
                checked={selectedRadio === 'payment'}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontWeight: 'bold' }}>
              {selectedRadio === 'billing'
                ? 'Billing Description'
                : 'OR Number'}
            </Form.Label>
            <Form.Control
              placeholder={
                selectedRadio === 'billing'
                  ? 'Billing Description'
                  : 'OR Number'
              }
              type="text"
              value={numOrDescription}
              onChange={handleOrDesc}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontWeight: 'bold' }}>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={handleAmount}
              required
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default BillingModal;
