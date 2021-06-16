import classes from '../Subject.module.css';
import React, { useState } from 'react';
import CardContainer from '../../../components/CardContainer';
import Datatable from '../../../components/Datatable';
import ViewBtn from '../../../components/ViewBtn';
import SubjectModal from './SubjectModal';
import DeleteBtnWithAlert from '../../../components/DeleteBtnWithAlert';
import { SUBJ_DUMMY_DATA } from '../../../dummy-data/subject';
import EditBtn from '../../../components/EditBtn';

const columns = [
  {
    label: 'ID',
    field: 'id',
  },
  {
    label: 'Department ID',
    field: 'departmentId',
  },
  {
    label: 'School Year',
    field: 'sy',
  },
  {
    label: 'Action',
    field: 'action',
    sort: 'disabled',
  },
];

const Subject = () => {
  const [isModalShown, setisModalShown] = useState(false);
  const [idToEdit, setidToEdit] = useState(null);
  const [schoolYearToEdit, setschoolYearToEdit] = useState('');
  const [dataTable, setDataTable] = useState({
    columns: columns,
    rows: SUBJ_DUMMY_DATA.map((item) => {
      return {
        id: item.id,
        departmentId: item.departmentId,
        sy: item.sy,
        action: (
          <>
            <DeleteBtnWithAlert
              action={() => {
                alert('item deleted');
              }}
            />
            <EditBtn
              onClick={() => {
                setschoolYearToEdit(item.sy);
                setidToEdit(item.id);
                setisModalShown(true);
              }}
            />
            <ViewBtn to={`/subject-details?sy=${item.sy}&id=${item.id}`} />
          </>
        ),
      };
    }),
  });

  return (
    <>
      <SubjectModal
        onHide={() => {
          setschoolYearToEdit('');
          setidToEdit(null);
          setisModalShown(false);
        }}
        isModalShown={isModalShown}
        id={idToEdit}
        schoolYear={schoolYearToEdit}
      />

      <CardContainer
        title="SCHOOL YEAR/S"
        insideTitle="School Year/s Table"
        isAddComponentPresent={true}
        addComponentFunction={() => setisModalShown(true)}
        addComponentTitle="Add New School Year"
      >
        <Datatable
          datatable={dataTable}
          className={classes['data-table-container']}
        />
      </CardContainer>
    </>
  );
};

export default Subject;
