import React from 'react';
import { Button } from 'react-bootstrap';
import { Eye } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';
const ViewBtn = ({ to = '#' }) => {
  return (
    <Link to={to}>
      <Button title="View Subjects" variant="primary">
        <Eye color="white" />
      </Button>
    </Link>
  );
};

export default ViewBtn;
