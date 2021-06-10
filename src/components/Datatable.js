import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Card } from 'react-bootstrap';

export default function Datatable({
  style,
  datatable,
  title = null,
  exportToCsv = false,
  className,
}) {
  return (
    <Card style={style} className={className} style={{ border: 'none' }}>
      {title !== null && (
        <Card.Header>
          <h4 className="text-center">{title}</h4>
        </Card.Header>
      )}
      <Card.Body>
        <MDBDataTable
          barReverse
          hover
          entriesOptions={[10, 25, 50, 100]}
          entries={10}
          pagesAmount={4}
          responsive={true}
          theadColor="grey"
          data={datatable}
          noBottomColumns={true}
        />
      </Card.Body>
    </Card>
  );
}
