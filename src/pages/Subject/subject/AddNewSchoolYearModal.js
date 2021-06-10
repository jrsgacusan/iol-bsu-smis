import React, { useState } from 'react';
import { Form, Modal, Button, Alert } from 'react-bootstrap';
import CustomModal from '../../../components/CustomModal';
import InputMask from 'react-input-mask';

const AddNewSchoolYearModal = ({ isModalShown, onHide }) => {
  const [currentSchoolYear, setcurrentSchoolYear] = useState('');
  const [isValid, setisValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setisValid(true);
    if (currentSchoolYear.trim().length !== 9) {
      setisValid(false);
      console.log('Invalid S.Y.');
      return;
    }

    console.log('Add new school year.');
  };

  const handleOnChange = (e) => {
    console.log(e.target.value.trim().length);
    setcurrentSchoolYear(e.target.value);
  };

  return (
    <CustomModal
      title="Add New School Year"
      isModalShown={isModalShown}
      onHide={onHide}
    >
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            {!isValid && <Alert variant="danger">Invalid school year.</Alert>}
            <Form.Label>School Year</Form.Label>
            <InputMask
              onChange={handleOnChange}
              value={currentSchoolYear}
              className="form-control"
              type="text"
              maskChar=" "
              mask="9999-9999"
            />
            {/* <Form.Control
              mask="9999-9999"
              required
              type="text"
              placeholder="School Year"
            /> */}
          </Form.Group>
          <Button variant="success" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default AddNewSchoolYearModal;
