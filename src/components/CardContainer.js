import classes from './CardContainer.module.css';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Wallet2 } from 'react-bootstrap-icons';
import AddComponent from './AddComponent';

//Props
// 'title' = the header title
// 'insideTitle' = the title at the left side of the component, leave null if not applicable.
// 'isAddComponentPresent' = the component for showing modal sheets, boolean.
// 'addComponentFunction' = the function executed when the addComponent is clicked.
// 'addComponentTitle' = the title of the add component

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
