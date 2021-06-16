import React from 'react';
import { Button } from 'react-bootstrap';
import { Power } from 'react-bootstrap-icons';
const DeactivateBtn = ({ onClick }) => {
  return (
    <Button onClick={onClick} title="Deactivate/Reactivate" variant="danger">
      <Power color="white" />
    </Button>
  );
};

export default DeactivateBtn;
