import React, { useEffect, useRef, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import { Download } from 'react-bootstrap-icons';
import Datatable from '../../../../components/Datatable';
import DeleteBtnWithAlert from '../../../../components/DeleteBtnWithAlert';
import StudentDataPDF from '../../../../components/PDF/StudentDataPDF';
import EditBtn from '../../../../components/EditBtn';
import { savePDF } from '@progress/kendo-react-pdf';

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
    width: 50,
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

const initTableData = [
  { label: 'Name', data: '' },
  { label: 'Address', data: '' },
  { label: 'Contact Number', data: '' },
  { label: 'Sex', data: '' },
  { label: 'Date of Birth', data: '' },
  { label: 'Place of Birth', data: '' },
  { label: 'Religion', data: '' },
  { label: 'Email', data: '' },
  { label: 'Guardian', data: '' },
  { label: 'Relationship to Guardian', data: '' },
  { label: "Mother's Name", data: '' },
  { label: "Mother's Occupation", data: '' },
  { label: "Mother's Mobile Number", data: '' },
  { label: 'Languages', data: '' },
  { label: 'Ethnicity', data: '' },
];

const Students = ({ list, deleteAction, editAction }) => {
  const contentArea = useRef();
  const isMounted = useRef(false);
  const filtered_students = list.filter((item) => item.role === 'student');

  const [tableData, settableData] = useState(initTableData);

  useEffect(() => {
    const index = tableData.indexOf((item) => item.label === 'Name') + 1;

    const fileName = tableData[index].data;

    //Do not save on first mount
    if (isMounted.current) {
      savePDF(contentArea.current, {
        fileName: fileName,
        margin: '1in',
      });
    } else {
      isMounted.current = true;
    }
  }, [tableData]);

  const downloadHandler = (item) => {
    //this should be item, but for now just use initValue
    const name = `${item.firstName} ${item.midName} ${item.lastName}`;
    settableData((prevState) => {
      const index = prevState.findIndex((item) => item.label === 'Name');
      const itemToEdit = prevState[index];
      let updatedTableData;
      let updatedItem;
      updatedItem = {
        ...itemToEdit,
        data: name,
      };
      updatedTableData = [...prevState];
      updatedTableData[index] = updatedItem;
      return updatedTableData;
    });
  };

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

            <Button onClick={() => downloadHandler(item)} variant="primary">
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

      <StudentDataPDF
        data={tableData}
        ref={contentArea}
        title="BSU SLS"
        footer="*For students, please create your official gmail account to be
                used for the google classNameroom. Follow this format:
                JuanCruz@gmail.com (**Capitalize the first letter of your first
                name and family name. Do not use any other aliases for us to
                easily identify you.)"
      />
    </>
  );
};

export default Students;
