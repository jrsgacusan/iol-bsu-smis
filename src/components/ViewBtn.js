import React from 'react';
import { Button } from 'react-bootstrap';
import { Eye } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';

const ViewBtn = ({ to = '#', title = 'view' }) => {
  return (
    <Link to={to}>
      <Button title={title} variant="primary">
        <Eye color="white" />
      </Button>
    </Link>
  );
};

export default ViewBtn;
