/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import CardContainer from '../../../components/CardContainer';
import Datatable from '../../../components/Datatable';
import EditBtn from '../../../components/EditBtn';
import ViewBtn from '../../../components/ViewBtn';
import DeleteBtnWithAlert from '../../../components/DeleteBtnWithAlert';
import { SUBJ_TEACHERS_DUMMY_DATA } from '../../../dummy-data/subject-teachers';
import classes from '../Subject.module.css';
import SubjectTeachersModal from './SubjectTeachersModal';

const columns = [
  {
    label: 'ID',
    field: 'id',
  },
  {
    label: 'Subject Teacher',
    field: 'subjTeacher',
  },
  {
    label: 'Teacher ID',
    field: 'teacherId',
  },
  {
    label: 'Subject',
    field: 'subject',
  },
  {
    label: 'Action',
    field: 'action',
    sort: 'disabled',
  },
];

const MENU_ITEMS = [
  { id: 123, name: 'Bar' },
  { id: 513241, name: 'Foo' },
  { id: 12341, name: 'Baz' },
];

const SubjectTeachers = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const [idToEdit, setidToEdit] = useState(null);
  const [isAddModalShown, setisAddModalShown] = useState(false);
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: SUBJ_TEACHERS_DUMMY_DATA.map((item) => {
      return {
        id: item.id,
        subjTeacher: item.subjTeacher,
        teacherId: item.teacherId,
        subject: item.subject,
        action: (
          <>
            <DeleteBtnWithAlert action={() => {}} />
            <EditBtn
              onClick={() => {
                setidToEdit(item.id);
                setisAddModalShown(true);
              }}
            />
            <ViewBtn
              to={`/subject-students?teachersid=${
                item.teacherId
              }&sy=${params.get('sy')}&subjectid=${item.id}`}
            />
          </>
        ),
      };
    }),
  });

  return (
    <>
      <SubjectTeachersModal
        onhide={() => {
          setidToEdit(null);
          setisAddModalShown(false);
        }}
        isModalShown={isAddModalShown}
        menuItems={MENU_ITEMS}
        id={idToEdit}
      />
      <CardContainer
        title="SUBJECT TEACHER/S"
        isAddComponentPresent={true}
        insideTitle={`${params.get('id')}`}
        addComponentTitle="Add New Subject Teacher"
        addComponentFunction={() => {
          setisAddModalShown(true);
        }}
      >
        <Datatable
          datatable={datatable}
          className={classes['data-table-container']}
        />
      </CardContainer>
    </>
  );
};

export default SubjectTeachers;
