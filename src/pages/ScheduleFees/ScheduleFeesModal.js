import React, { useEffect, useState } from 'react';
import CustomModal from '../../components/CustomModal';
import { Modal, Form, Button } from 'react-bootstrap';
const ScheduleFeesModal = ({ onHide, id = null, gradeLevel = '' }) => {
  const [currGradeLevel, setcurrGradeLevel] = useState('');
  useEffect(() => {
    setcurrGradeLevel(gradeLevel);
  }, [gradeLevel]);

  const handleOnChange = (e) => {
    setcurrGradeLevel(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      //create mode
    } else {
      //edit mode
    }
  };

  return (
    <CustomModal
      customOnHide={onHide}
      title={!id ? 'Add New Grade Level' : 'Edit Grade Level'}
    >
      <Modal.Body>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group>
            <Form.Label>Year Level</Form.Label>
            <Form.Control
              type="text"
              value={currGradeLevel}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Button type="submit" variant="success">
            {!id ? 'Save' : 'Update'}
          </Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default ScheduleFeesModal;
