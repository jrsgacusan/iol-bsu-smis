import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import CustomModal from '../../components/CustomModal';
import CustomDropDown from '../../components/CustomDropDown';

const BillingModal = ({ isModalShown, onHide, menuItems }) => {
  const [selectedStudentInModal, setselectedStudentInModal] = useState(null);
  const [selectedRadio, setselectedRadio] = useState('billing');

  const handleSelect = (e) => {
    setselectedStudentInModal(e);
    console.log(e);
  };

  const handleRadioOnChange = (e) => {
    console.log(e.currentTarget.id);
    setselectedRadio(e.currentTarget.id);
  };

  return (
    <CustomModal
      isModalShown={isModalShown}
      onHide={onHide}
      title="Add New Billing"
    >
      <Modal.Body>
        <Form>
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
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontWeight: 'bold' }}>Amount</Form.Label>
            <Form.Control type="number" placeholder="Amount" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" type="submit" onClick={() => {}}>
          Save
        </Button>
      </Modal.Footer>
    </CustomModal>
  );
};

export default BillingModal;
