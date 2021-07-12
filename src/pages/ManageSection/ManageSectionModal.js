import React, { useEffect, useState } from 'react';
import CustomModal from '../../components/CustomModal';
import { Button, Modal, Form } from 'react-bootstrap';
const ManageSectionModal = ({ onHide, data = null }) => {
  const [currOfferedTo, setcurrOfferedTo] = useState('');
  const [currSection, setcurrSection] = useState('');

  useEffect(() => {
    if (data) {
      setcurrOfferedTo(data.offeredTo);
      setcurrSection(data.section);
    } else {
      setcurrOfferedTo('');
      setcurrSection('');
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data) {
      //create mode
    } else {
      //edit mode
    }
  };
  const handleSectionOnChange = (e) => {
    setcurrSection(e.target.value);
  };
  const handleOfferedToOnChange = (e) => {
    setcurrOfferedTo(e.target.value);
  };

  return (
    <CustomModal
      title={!data ? 'Add New Section' : 'Update Section'}
      customOnHide={onHide}
    >
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Section</Form.Label>
            <Form.Control
              value={currSection}
              type="text"
              onChange={handleSectionOnChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Offered To</Form.Label>
            <Form.Control
              value={currOfferedTo}
              required
              as="select"
              onChange={handleOfferedToOnChange}
            >
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit" variant="success">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default ManageSectionModal;
