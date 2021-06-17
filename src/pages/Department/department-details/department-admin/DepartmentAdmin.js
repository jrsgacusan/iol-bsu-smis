import React from 'react';
import { Row } from 'react-bootstrap';
import FacultyItem from '../faculty/FacultyItem';
const DepartmentAdmin = ({ list, deleteAction, editAction }) => {
  const filtered_admins = list.filter((e) => e.role === 'admin');

  return (
    <Row style={{ paddingTop: '20px' }}>
      {filtered_admins.map((item) => (
        <FacultyItem
          item={item}
          deleteAction={deleteAction}
          editAction={editAction}
          key={item.id}
        />
      ))}
    </Row>
  );
};

export default DepartmentAdmin;
