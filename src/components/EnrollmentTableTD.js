import React from 'react';
import classes from './EnrollmentTable.module.css';
const EnrollmentTableTD = ({ item }) => {
  return (
    <>
      <tr className={classes['tr-with-data']}>
        <td>{item.level}</td>
        <td>{item.pending}</td>
        <td>{item.approved}</td>
        <td>{item.action}</td>
      </tr>
      <tr className={classes['tr-no-data']} />
    </>
  );
};

export default EnrollmentTableTD;
