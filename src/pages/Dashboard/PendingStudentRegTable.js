import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Card } from 'react-bootstrap';

export default function PendingStudentRegTable() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'ID',
        field: 'id',
        width: 100,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'ID',
        },
      },
      {
        label: 'LRN',
        field: 'lrn',
        width: 150,
      },
      {
        label: 'Department Name',
        field: 'deptName',
        width: 200,
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 220,
      },
      {
        label: 'Contact Number',
        field: 'contactNum',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'disabled',
        width: 270,
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      {
        id: '1',
        lrn: '090012',
        deptName: 'CITCS',
        name: 'Juel Rei S. Gacusan',
        contactNum: 9773757020,
        email: 'juelreigacusan22@gmail.com',
        clickEvent: () => {
          console.log(`Clicked 1`);
        },
        action: 'None',
      },
      {
        id: '2',
        lrn: '090013',
        deptName: 'CCJE',
        name: 'Lebron James',
        contactNum: 9772836465,
        email: 'jebronlames@gmail.com',
        clickEvent: () => {
          console.log(`Clicked 2`);
        },
        action: 'None',
      },
    ],
  });

  return (
    <Card style={{ border: 'none' }}>
      <Card.Header>
        <h2 className="text-center">Pending Student Registration</h2>
      </Card.Header>
      <Card.Body>
        <MDBDataTableV5
          scrollX={true}
          pagingTop
          searchTop
          barReverse
          hover
          entriesOptions={[10, 25, 50, 100]}
          searchBottom={false}
          entries={10}
          pagesAmount={4}
          data={datatable}
          fullPagination
        />
      </Card.Body>
    </Card>
  );
}
