import React, { useState } from 'react';
import { Form, Alert, Modal, Button } from 'react-bootstrap';
import CustomModal from '../../components/CustomModal';
import useInput from '../../hooks/use-input';

//Helper function
const validateValue = (value) => value.trim() !== '';

const DashboardModal = ({ onHide, isModalShown, eventDate }) => {
  const {
    value: enteredEventName,
    isValid: eventNameIsValid,
    hasError: eventNameHasError,
    valueChangeHandler: eventNameChangeHandler,
    inputBlurHandler: eventNameInputBlurHandler,
    reset: resetEnteredEventName,
  } = useInput(validateValue);

  const [selectedGradeLevel, setselectedGradeLevel] = useState('7');
  let formIsValid = false;
  if (eventNameIsValid) {
    formIsValid = true;
  }

  //Create event handler
  const handleCreateEvent = () => {
    if (!formIsValid) {
      return;
    }
    console.log(
      `Event date:${eventDate} \nEvent name: ${enteredEventName}\nGrade level: ${selectedGradeLevel}`
    );
    console.log('Creating the event...');
    onHide();
    resetEnteredEventName();
    setselectedGradeLevel('7');
  };
  const handleDeleteEvent = () => {
    console.log('Deleting an event...');
  };

  return (
    <CustomModal
      title="Add Event"
      onHide={onHide}
      size="lg"
      isModalShown={isModalShown}
    >
      <Modal.Body>
        <Form>
          {eventNameHasError && (
            <Alert variant="danger">Invalid event name</Alert>
          )}

          <Form.Group>
            <Form.Label>Event Name/Message</Form.Label>
            <Form.Control
              onBlur={eventNameInputBlurHandler}
              type="text"
              placeholder="Insert event name"
              value={enteredEventName}
              onChange={eventNameChangeHandler}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Grade Level</Form.Label>
            <Form.Control
              as="select"
              value={selectedGradeLevel}
              onChange={(e) => {
                setselectedGradeLevel(e.target.value);
              }}
            >
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="success" type="submit" onClick={handleCreateEvent}>
          Create Event
        </Button>
        <Button variant="danger" onClick={handleDeleteEvent}>
          Delete
        </Button>
      </Modal.Footer>
    </CustomModal>
  );
};

export default DashboardModal;
