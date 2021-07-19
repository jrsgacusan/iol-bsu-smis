import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';

//Value validator for the input fields

import * as actionTypes from '../../store/actions';

const Calendar = () => {
  const events = useSelector((state) => state.events);
  const [calendarInfo, setcalendarInfo] = useState(null);
  const dispatch = useDispatch();
  const handleDateSelect = (selectInfo) => {
    setcalendarInfo(selectInfo);
    dispatch({ type: actionTypes.SHOW_MODAL });
  };

  return (
    <>
      <DashboardModal selectInfo={calendarInfo} />

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
              initialEvents={events}
              select={handleDateSelect}
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
