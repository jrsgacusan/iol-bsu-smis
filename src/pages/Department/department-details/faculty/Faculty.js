import React from 'react';
import AddComponent from '../../../../components/AddComponent';
import classes from './Faculty.module.css';
import { Row } from 'react-bootstrap';
import FacultyItem from './FacultyItem';

const Faculty = ({ showModal, list, deleteAction, editAction }) => {
  const filtered = list.filter((e) => e.role === 'faculty');

  return (
    <>
      <div className={classes.div}>
        <AddComponent title="Add Faculty" onClick={showModal} />
      </div>
      <Row>
        {filtered.map((item) => (
          <FacultyItem
            deleteAction={deleteAction}
            editAction={editAction}
            key={item.id}
            item={item}
          />
        ))}
      </Row>
    </>
  );
};

export default Faculty;
