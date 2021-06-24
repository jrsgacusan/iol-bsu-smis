import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewEnrollmentCard = ({ title, children }) => {
  return (
    <Card>
      <Card.Header
        style={{
          background: '#2cabe3',
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        {title}
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default ReviewEnrollmentCard;
