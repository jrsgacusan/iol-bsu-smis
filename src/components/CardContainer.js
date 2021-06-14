import classes from './CardContainer.module.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Wallet2 } from 'react-bootstrap-icons';

const CardContainer = ({ title, children }) => {
  return (
    <Card style={{ border: 'none' }} className={classes['second-row-card']}>
      <Card.Header
        style={{ background: '#2cabe3' }}
        className={classes['second-row-header']}
      >
        <Wallet2 size={30} color="white" className={classes.wallet} />
        <p>{title}</p>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default CardContainer;
