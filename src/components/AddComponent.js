import classes from './AddComponent.module.css';
import React from 'react';
import { PlusLg } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

const AddComponent = ({ title, onClick }) => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <span className={classes['add-new-transaction']} onClick={onClick}>
      <PlusLg className={classes.icon} size={50} />
      <p style={{ color: `${!isDarkMode ? 'black' : 'white'}` }}>{title}</p>
    </span>
  );
};

export default AddComponent;
