import React, { useState } from 'react';
import { Card, Button, Modal, Form, Container } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; //needed for dayClick

import bootstrapPlugin from '@fullcalendar/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Calendar = () => {
  const [isModalShown, setisModalShown] = useState(false);
  const [eventDate, setEventDate] = useState('');

  const [currentEventName, setCurrentEventName] = useState('');
  const [currentGradeSelected, setCurrentGradeSelected] = useState(7);

  const handleDayClick = (e) => {
    setEventDate(e.dateStr);
    setisModalShown(true);
  };

  const handleCreateEvent = () => {
    console.log('Creating an event...');
  };
  const handleDeleteEvent = () => {
    console.log('Deleting an event...');
  };

  const handleEventNameOnChange = (e) => {
    setCurrentEventName(e.target.value);
  };

  const handleSelectOnChange = (e) => {
    setCurrentGradeSelected(e.target.value);
  };

  return (
    <>
      <Modal
        size="lg"
        show={isModalShown}
        onHide={() => setisModalShown(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title as="h2">Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Event Name/Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert event name"
                value={currentEventName}
                onChange={handleEventNameOnChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Grade Level</Form.Label>
              <Form.Control
                as="select"
                onChange={handleSelectOnChange}
                value={currentGradeSelected}
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
          <Button variant="secondary" onClick={() => setisModalShown(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleCreateEvent}>
            Create Event
          </Button>
          <Button variant="danger" onClick={handleDeleteEvent}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Card style={{ border: 'none' }}>
        <Card.Body>
          <div style={{ flexGrow: 1 }}>
            <FullCalendar
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin,
                bootstrapPlugin,
              ]}
              expandRows={true}
              handleWindowResize={false}
              initialView="timeGridWeek"
              themeSystem="bootstrap"
              dateClick={handleDayClick}
              selectable={true}
              editable={true}
              headerToolbar={{
                left: 'prev,next,today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              buttonText={{
                today: 'Today',
                month: 'Month',
                day: 'Day',
                week: 'Week',
              }}
              selectMirror={true}
              dayMaxEvents={true}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Calendar;
