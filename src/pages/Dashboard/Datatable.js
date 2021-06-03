import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Card } from 'react-bootstrap';

export default function Datatable() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'ID',
        field: 'id',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'ID',
        },
      },
      {
        label: 'LRN',
        field: 'lrn',
      },
      {
        label: 'Department Name',
        field: 'deptName',
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
      },
      {
        label: 'Contact Number',
        field: 'contactNum',
        sort: 'disabled',
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'disabled',
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'disabled',
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
      {
        id: '3',
        lrn: '23155123',
        deptName: 'Janitor Dept',
        name: 'Kobe Bryant',
        contactNum: 9772836465,
        email: 'janedoe@gmail.com',
        clickEvent: () => {
          console.log(`Clicked`);
        },
        action: 'None',
      },
      {
        id: '22',
        lrn: '09002113',
        deptName: 'CCJE',
        name: 'James Bond',
        contactNum: 9772836465,
        email: 'ass@gmail.com',
        clickEvent: () => {
          console.log(`Clicked`);
        },
        action: 'None',
      },
    ],
  });

  return (
    <Card style={{ border: 'none' }}>
      <Card.Header>
        <h4 className="text-center">Pending Student Registration</h4>
      </Card.Header>
      <Card.Body>
        <MDBDataTableV5
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
          responsive={true}
          theadColor="grey"
          // small={true}
          // responsiveSm={true}
          // responsiveLg={true}
        />
      </Card.Body>
    </Card>
  );
}
