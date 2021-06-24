import React, { useState } from 'react';
import CardContainer from '../../components/CardContainer';
import Datatable from '../../components/Datatable';
import { LOGS_DUMMY_DATA } from '../../dummy-data/logs';

const columns = [
  { label: 'Name', field: 'name' },
  { label: 'Action', field: 'action' },
  { label: 'Date', field: 'date' },
];

const AuditLogs = () => {
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: LOGS_DUMMY_DATA.map((item) => {
      return { name: item.name, action: item.action, date: item.date };
    }),
  });
  return (
    <CardContainer title="LOGS" insideTitle="Logs Table">
      <Datatable datatable={datatable} />
    </CardContainer>
  );
};

export default AuditLogs;
