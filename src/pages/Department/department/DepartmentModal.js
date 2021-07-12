import { Modal, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import CustomModal from '../../../components/CustomModal';

const DepartmentModal = ({ onHide, id = null, departmentName }) => {
  const [currentDeptName, setcurrentDeptName] = useState('');

  const onChangeHandler = (e) => {
    setcurrentDeptName(e.target.value);
    console.log(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!id) {
      //Create mode
      console.log('Create mode');
    } else {
      //Update mode
      console.log('Update mode');
    }
  };

  return (
    <CustomModal
      title={!id ? 'Add New Department' : 'Edit Department Information'}
      customOnHide={onHide}
    >
      <Modal.Body>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group>
            <Form.Label>Department Name</Form.Label>
            <Form.Control
              value={!departmentName ? currentDeptName : departmentName}
              onChange={onChangeHandler}
              placeholder="Enter department name"
              type="text"
            />
          </Form.Group>
          <Button variant="success" type="submit">
            {!id ? 'Save' : 'Update'}
          </Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default DepartmentModal;
