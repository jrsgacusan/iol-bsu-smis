/* eslint-disable no-unused-vars */
import classes from '../Subject.module.css';
import React, { useState } from 'react';
import CardContainer from '../../../components/CardContainer';
import Datatable from '../../../components/Datatable';
import ViewBtn from '../../../components/ViewBtn';
import SubjectModal from './SubjectModal';
import DeleteBtnWithAlert from '../../../components/DeleteBtnWithAlert';
import { SUBJ_DUMMY_DATA } from '../../../dummy-data/subject';
import EditBtn from '../../../components/EditBtn';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actions';

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
  const dispatch = useDispatch();
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
                dispatch({ type: actionTypes.SHOW_MODAL });
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
        }}
        id={idToEdit}
        schoolYear={schoolYearToEdit}
      />

      <CardContainer
        title="SCHOOL YEAR/S"
        insideTitle="School Year/s Table"
        isAddComponentPresent={true}
        addComponentFunction={() => dispatch({ type: actionTypes.SHOW_MODAL })}
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
