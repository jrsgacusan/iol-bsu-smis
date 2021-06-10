import React, { useState } from 'react';
import { Form, Modal, Button, Alert } from 'react-bootstrap';
import CustomModal from '../../../components/CustomModal';
import InputMask from 'react-input-mask';

const EditSchoolYearModal = ({ isModalShown, onHide, id, schoolYear }) => {
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

    console.log(`Edit ID: ${id}\nS.Y.:${currentSchoolYear}`);
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
            {!isValid && (
              <Alert variant="danger">
                Invalid. Please change the value before updating.
              </Alert>
            )}
            <Form.Label>School Year</Form.Label>
            <InputMask
              onChange={handleOnChange}
              value={currentSchoolYear ? currentSchoolYear : schoolYear}
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
            Update
          </Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default EditSchoolYearModal;
