import React from 'react';
import { Table } from 'react-bootstrap';
import classes from './EnrollmentTable.module.css';

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
        {data.map((item, index) => {
          return (
            <>
              <tr key={item.level} className={classes['tr-with-data']}>
                <td>{item.level}</td>
                <td>{item.pending}</td>
                <td>{item.approved}</td>
                <td>{item.action}</td>
              </tr>

              <tr className={classes['tr-no-data']} key={item.level} />
            </>
          );
        })}
      </tbody>
    </Table>
  );
};

export default EnrollmentTable;
