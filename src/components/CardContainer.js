import classes from './CardContainer.module.css';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Wallet2 } from 'react-bootstrap-icons';
import AddComponent from './AddComponent';

const CardContainer = ({
  title,
  insideTitle,
  children,
  isAddComponentPresent = false,
  addComponentFunction,
  addComponentTitle,
}) => {
  return (
    <Card style={{ border: 'none' }} className={classes['second-row-card']}>
      <Card.Header
        style={{ background: '#2cabe3' }}
        className={classes['second-row-header']}
      >
        <Wallet2 size={30} color="white" className={classes.wallet} />
        <p>{title}</p>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col className={classes.div}>
            <h3>{insideTitle}</h3>
            {isAddComponentPresent && (
              <AddComponent
                title={addComponentTitle}
                onClick={addComponentFunction}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardContainer;
