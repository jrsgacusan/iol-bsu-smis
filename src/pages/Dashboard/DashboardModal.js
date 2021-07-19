import React, { useState } from 'react';
import { Form, Alert, Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import CustomModal from '../../components/CustomModal';
import useInput from '../../hooks/use-input';
import * as actionTypes from '../../store/actions';

//Helper function
const validateValue = (value) => value.trim() !== '';

const DashboardModal = ({ selectInfo }) => {
  const dispatch = useDispatch();
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
  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    console.log('Creating the event...');
    resetEnteredEventName();
    setselectedGradeLevel('7');

    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    calendarApi.addEvent({
      id: Math.random,
      title: `${enteredEventName} for Grade ${selectedGradeLevel}.`,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
    dispatch({ type: actionTypes.SHOW_MODAL });
  };
  const handleDeleteEvent = () => {
    console.log('Deleting an event...');
  };

  return (
    <CustomModal title="Add Event" size="lg">
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
          <Button
            variant="secondary"
            onClick={() => {
              dispatch({ type: actionTypes.SHOW_MODAL });
            }}
          >
            Close
          </Button>
          <Button variant="success" type="submit" onClick={handleCreateEvent}>
            Create Event
          </Button>
          <Button variant="danger" onClick={handleDeleteEvent}>
            Delete
          </Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default DashboardModal;
