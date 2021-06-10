import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import CustomModal from '../../../components/CustomModal';

const AddNewSubjectModal = ({ onHide, isModalShown }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('creating subject');
  };

  return (
    <CustomModal
      isModalShown={isModalShown}
      onHide={onHide}
      title="Add New Subject"
    >
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label
              placeholder="Subject Title"
              style={{ fontWeight: 'bold' }}
            >
              Subject Title
            </Form.Label>
            <Form.Control required type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label
              placeholder="Subject Description"
              style={{ fontWeight: 'bold' }}
            >
              Subject Description
            </Form.Label>
            <Form.Control required type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontWeight: 'bold' }}>Offered To</Form.Label>
            <Form.Control as="select">
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </Form.Control>
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default AddNewSubjectModal;
