/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import CardContainer from '../../components/CardContainer';
import Datatable from '../../components/Datatable';
import { ATTENDANCE_DUMMY_DATA } from '../../dummy-data/attendance';

const columns = [
  {
    label: 'ID',
    field: 'id',
  },
  {
    label: 'Name',
    field: 'studentName',
  },
  {
    label: 'Action',
    field: 'action',
  },
];

const Attendance = () => {
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: ATTENDANCE_DUMMY_DATA.map((item) => {
      return { id: item.id, studentName: item.name, action: 'none' };
    }),
  });

  return (
    <CardContainer title="ATTENDANCE">
      <Datatable datatable={datatable} />
    </CardContainer>
  );
};

export default Attendance;
