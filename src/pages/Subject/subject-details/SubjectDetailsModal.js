import React, { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import CustomModal from '../../../components/CustomModal';

const SubjectDetailsModal = ({
  onHide,
  isModalShown,
  subjectTitle = '',
  subjectDescription = '',
  offeredTo = '',
  id = null,
}) => {
  const [currentSubjTitle, setcurrentSubjTitle] = useState('');
  const [currentSubjDescription, setcurrentSubjDescription] = useState('');
  const [currentOfferedTo, setcurrentOfferedTo] = useState('');

  useEffect(() => {
    setcurrentSubjTitle(subjectTitle);
    setcurrentSubjDescription(subjectDescription);
    setcurrentOfferedTo(offeredTo);
  }, [subjectTitle, subjectDescription, offeredTo]);

  const handleTitleOnChange = (e) => {
    setcurrentSubjTitle(e.target.value);
  };
  const handleDescriptionOnChange = (e) => {
    setcurrentSubjDescription(e.target.value);
  };
  const handleOfferedToOnChange = (e) => {
    setcurrentOfferedTo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === null) {
      //create mode
    } else {
      //edit mode
    }
  };

  return (
    <CustomModal
      isModalShown={isModalShown}
      onHide={onHide}
      title={!id ? 'Add New Subject' : 'Update Subject'}
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
            <Form.Control
              value={currentSubjTitle || ''}
              onChange={handleTitleOnChange}
              required
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label
              placeholder="Subject Description"
              style={{ fontWeight: 'bold' }}
            >
              Subject Description
            </Form.Label>
            <Form.Control
              value={currentSubjDescription || ''}
              onChange={handleDescriptionOnChange}
              required
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontWeight: 'bold' }}>Offered To</Form.Label>
            <Form.Control
              value={currentOfferedTo || ''}
              onChange={handleOfferedToOnChange}
              as="select"
            >
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </Form.Control>
          </Form.Group>
          <Button variant="success" type="submit">
            {!id ? 'Save' : 'Update'}
          </Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default SubjectDetailsModal;
