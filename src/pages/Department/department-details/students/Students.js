import React, { useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import { Download } from 'react-bootstrap-icons';
import Datatable from '../../../../components/Datatable';
import DeleteBtnWithAlert from '../../../../components/DeleteBtnWithAlert';
import EditBtn from '../../../../components/EditBtn';

const columns = [
  {
    label: 'ID',
    field: 'id',
  },
  {
    label: 'Name',
    field: 'name',
  },
  {
    label: 'Address',
    field: 'address',
  },
  {
    label: 'Contact Number',
    field: 'emergencyNum',
  },

  {
    label: 'Person to Contact in case of emergency',
    field: 'personToContact',
  },
  {
    label: "Contact Person's Number",
    field: 'emergencyNum',
  },
  {
    label: 'Action',
    field: 'action',
  },
];

const Students = ({ list, deleteAction, editAction }) => {
  const filtered_students = list.filter((item) => item.role === 'student');
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: filtered_students.map((item) => {
      return {
        id: item.id,
        name: `${item.firstName} ${item.midName} ${item.lastName}`,
        contactNum: item.contactNum,
        address: item.address,
        personToContact: item.personToContact,
        emergencyNum: item.emergencyNum,
        action: (
          <>
            <DeleteBtnWithAlert action={deleteAction} />
            <EditBtn
              onClick={() => {
                editAction(item);
              }}
            />
            <Button variant="primary">
              <Download color="white" />
            </Button>
          </>
        ),
      };
    }),
  });

  return (
    <>
      <Row
        style={{ fontSize: '21px', paddingTop: '20px', paddingLeft: '40px' }}
      >
        Students Table
      </Row>
      <Datatable datatable={datatable} />
    </>
  );
};

export default Students;
