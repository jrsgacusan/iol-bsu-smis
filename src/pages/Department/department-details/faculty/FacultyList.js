import React from 'react';
import FacultyItem from './FacultyItem';
import { Row } from 'react-bootstrap';
const FacultyList = ({ list, editAction, deleteAction }) => {
  return (
    <Row>
      {list.map((item) => (
        <FacultyItem
          deleteAction={deleteAction}
          editAction={editAction}
          key={item.id}
          item={item}
        />
      ))}
    </Row>
  );
};

export default FacultyList;
