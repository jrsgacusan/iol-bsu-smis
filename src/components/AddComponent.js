import classes from './AddComponent.module.css';
import React from 'react';
import { PlusLg } from 'react-bootstrap-icons';

const AddComponent = ({ title, onClick }) => {
  return (
    <span className={classes['add-new-transaction']} onClick={onClick}>
      <PlusLg className={classes.icon} size={50} />
      <p>{title}</p>
    </span>
  );
};

export default AddComponent;
