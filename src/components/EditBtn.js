import { Button } from 'react-bootstrap';
import React from 'react';
import { PencilSquare } from 'react-bootstrap-icons';

const EditBtn = ({ onClick }) => {
  return (
    <Button title="Edit" variant="success" onClick={onClick}>
      <PencilSquare color="white" />
    </Button>
  );
};

export default EditBtn;
