import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; //needed for dayClick

import bootstrapPlugin from '@fullcalendar/bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

//Calendar responsive css
import './Calendar.css';
import DashboardModal from './DashboardModal';
import { useDispatch } from 'react-redux';

//Value validator for the input fields

import * as actionTypes from '../../store/actions';

const Calendar = () => {
  const [eventDate, setEventDate] = useState('');
  const dispatch = useDispatch();
  const handleDateClick = (e) => {
    setEventDate(e.dateStr);
    dispatch({ type: actionTypes.SHOW_MODAL });
  };
  return (
    <>
      <DashboardModal eventDate={eventDate} />

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
              initialView="dayGridMonth"
              themeSystem="bootstrap"
              dateClick={handleDateClick}
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
