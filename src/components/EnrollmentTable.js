import React from 'react';
import { Table } from 'react-bootstrap';
import classes from './EnrollmentTable.module.css';
import EnrollmentTableTD from './EnrollmentTableTD';

//data contains level,pending,approved,action

const EnrollmentTable = ({ data }) => {
  return (
    <Table
      borderless={true}
      bordered={false}
      responsive
      className={classes.table}
    >
      <thead className={classes['table-header']}>
        <tr>
          <th>Grade Level</th>
          <th className={classes.pending}>
            <span>Pending</span>
          </th>
          <th className={classes.approved}>
            <span>Approved</span>
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return <EnrollmentTableTD key={item.level} item={item} />;
        })}
      </tbody>
    </Table>
  );
};

export default EnrollmentTable;
