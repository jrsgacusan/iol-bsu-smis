import React from 'react';
import image from './none.png';
import classes from './FacultyItem.module.css';
import { Col } from 'react-bootstrap';
import { Trash, PencilSquare } from 'react-bootstrap-icons';

//item properties
//id , firstName, lastName, address, personToContact,emergencyNum,role,sy

const FacultyItem = ({ item, deleteAction, editAction }) => {
  return (
    <>
      <Col lg={2} md={2} sm={6} xs={12}>
        <div className={classes.container}>
          <img src={image} alt={item.id} className={classes.image} />
          <div className={classes.overlay}>
            <div className={classes.buttons}>
              <button onClick={deleteAction} className={classes.button}>
                <Trash color="white" className={classes.icon} />
              </button>
              <button
                onClick={() => {
                  editAction(item);
                }}
                className={classes.button}
              >
                <PencilSquare color="white" className={classes.icon} />
              </button>
            </div>
          </div>
        </div>
        <div className={classes['bottom-text']}>
          {item.firstName} {item.lastName}
        </div>
      </Col>
    </>
  );
};

export default FacultyItem;
