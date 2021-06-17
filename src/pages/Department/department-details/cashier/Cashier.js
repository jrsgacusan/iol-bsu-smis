import React from 'react';
import { Row } from 'react-bootstrap';
import FacultyItem from '../faculty/FacultyItem';

const Cashier = ({ list, deleteAction, editAction }) => {
  return (
    <Row style={{ paddingTop: '20px' }}>
      {list.map(
        (item) =>
          item.role === 'cashier' && (
            <FacultyItem
              item={item}
              deleteAction={deleteAction}
              editAction={editAction}
              key={item.id}
            />
          )
      )}
    </Row>
  );
};

export default Cashier;
