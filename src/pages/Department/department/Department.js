import React, { useState } from 'react';
import CardContainer from '../../../components/CardContainer';
import Datatable from '../../../components/Datatable';
import DeleteBtnWithAlert from '../../../components/DeleteBtnWithAlert';
import EditBtn from '../../../components/EditBtn';
import DeactivateBtn from '../../../components/DeactivateBtn';
import ViewBtn from '../../../components/ViewBtn';
import { DEPT_DUMMY_DATA } from '../../../dummy-data/department';
import DepartmentModal from './DepartmentModal';

const columns = [
  {
    label: 'Department ID',
    field: 'deptartmentId',
  },
  {
    label: 'School ID',
    field: 'schoolId',
  },
  {
    label: 'Department Name',
    field: 'departmentName',
  },
  {
    label: 'Status',
    field: 'status',
  },
  {
    label: 'Action',
    field: 'action',
  },
];

const Department = () => {
  const [isModalShown, setisModalShown] = useState(false);
  const [id, setid] = useState(null);
  const [departmentName, setdepartmentName] = useState(null);
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: DEPT_DUMMY_DATA.map((item) => {
      return {
        deptartmentId: item.deptartmentId,
        schoolId: item.schoolId,
        departmentName: item.departmentName,
        status: item.isActive ? 'active' : 'inactive',
        action: (
          <>
            <DeleteBtnWithAlert />
            <EditBtn
              onClick={() => {
                setid(item.deptartmentId);
                setdepartmentName(item.departmentName);
                setisModalShown(true);
              }}
            />
            <ViewBtn
              to={`/department-details?department_id=${item.deptartmentId}`}
            />
            <DeactivateBtn />
          </>
        ),
      };
    }),
  });

  return (
    <>
      <DepartmentModal
        id={id}
        departmentName={departmentName}
        isModalShown={isModalShown}
        onHide={() => {
          setid(null);
          setdepartmentName(null);
          setisModalShown(false);
        }}
      />
      <CardContainer
        title="DEPARTMENT/S"
        insideTitle="Department/s Table"
        isAddComponentPresent={true}
        addComponentFunction={() => {
          setisModalShown(true);
        }}
        addComponentTitle="Add Department"
      >
        {' '}
        <Datatable datatable={datatable} />
      </CardContainer>
    </>
  );
};

export default Department;
