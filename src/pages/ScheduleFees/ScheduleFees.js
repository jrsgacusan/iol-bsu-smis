/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import CardContainer from '../../components/CardContainer';
import Datatable from '../../components/Datatable';
import DeleteBtnWithAlert from '../../components/DeleteBtnWithAlert';
import EditBtn from '../../components/EditBtn';
import ViewBtn from '../../components/ViewBtn';
import ScheduleFeesModal from './ScheduleFeesModal';
import * as actionTypes from '../../store/actions';
import { useDispatch } from 'react-redux';

const columns = [
  { label: 'ID', field: 'id' },
  { label: 'Grade Level', field: 'level' },
  { label: 'Action', field: 'action', sort: 'disabled' },
];
const rows = [{ id: '000001', level: 'Grade 7' }];

const ScheduleFees = () => {
  const dispatch = useDispatch();
  const [id, setid] = useState(null);
  const [gradeLevel, setgradeLevel] = useState('');
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: rows.map((item) => {
      return {
        id: item.id,
        level: item.level,
        action: (
          <>
            <DeleteBtnWithAlert action={() => {}} />
            <EditBtn
              onClick={() => {
                setid(item.id);
                setgradeLevel(item.level);
                dispatch({ type: actionTypes.SHOW_MODAL });
              }}
            />
            <ViewBtn
              to={`/fees-list?gradelevel=${item.level}`}
              title="View Subjects"
            />
          </>
        ),
      };
    }),
  });

  return (
    <>
      <ScheduleFeesModal
        onHide={() => {
          setid(null);
          setgradeLevel('');
        }}
        id={id}
        gradeLevel={gradeLevel}
      />

      <CardContainer
        title="GRADE LEVELS"
        insideTitle="Grade Level/s Table"
        isAddComponentPresent={true}
        addComponentTitle="Add New Grade Level"
        addComponentFunction={() => {
          dispatch({ type: actionTypes.SHOW_MODAL });
        }}
      >
        <Datatable datatable={datatable} />
      </CardContainer>
    </>
  );
};

export default ScheduleFees;
