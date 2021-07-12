import React from 'react';
import classes from './EnrollmentTable.module.css';
import { useSelector } from 'react-redux';
// 'item' has level, pending, approved, and action properties.

const EnrollmentTableTD = ({ item }) => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <>
      <tr
        className={`${classes['tr-with-data']} ${isDarkMode && classes.dark}`}
      >
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
