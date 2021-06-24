import React, { useState } from 'react';
import CardContainer from '../../components/CardContainer';
import Datatable from '../../components/Datatable';
import DeleteBtnWithAlert from '../../components/DeleteBtnWithAlert';
import EditBtn from '../../components/EditBtn';
import ViewBtn from '../../components/ViewBtn';
import ScheduleFeesModal from './ScheduleFeesModal';

const columns = [
  { label: 'ID', field: 'id' },
  { label: 'Grade Level', field: 'level' },
  { label: 'Action', field: 'action', sort: 'disabled' },
];
const rows = [{ id: '000001', level: 'Grade 7' }];

const ScheduleFees = () => {
  const [isModalShown, setisModalShown] = useState(false);
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
                setisModalShown(true);
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
        isModalShown={isModalShown}
        onHide={() => {
          setisModalShown(false);
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
          setisModalShown(true);
        }}
      >
        <Datatable datatable={datatable} />
      </CardContainer>
    </>
  );
};

export default ScheduleFees;
