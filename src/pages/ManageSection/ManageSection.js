/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import CardContainer from '../../components/CardContainer';
import Datatable from '../../components/Datatable';
import DeleteBtnWithAlert from '../../components/DeleteBtnWithAlert';
import EditBtn from '../../components/EditBtn';
import ViewBtn from '../../components/ViewBtn';
import ManageSectionModal from './ManageSectionModal';

const columns = [
  { label: 'ID', field: 'id' },
  { label: 'Section', field: 'section' },
  { label: 'Grade Level', field: 'gradeLevel' },
  { label: 'Action', field: 'action' },
];

const rows = [
  {
    id: '2',
    section: '7-1',
    gradeLevel: 'Grade 7',
  },
];

const ManageSection = () => {
  const [isModalShown, setisModalShown] = useState(false);
  const [data, setdata] = useState(null);
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: rows.map((item) => {
      return {
        id: item.id,
        section: item.section,
        gradeLevel: item.gradeLevel,
        action: (
          <>
            <DeleteBtnWithAlert action={() => {}} />
            <EditBtn
              onClick={() => {
                setdata({
                  id: item.id,
                  offeredTo: item.gradeLevel,
                  section: item.section,
                });
                setisModalShown(true);
              }}
            />
            <ViewBtn
              to={`/section-students?sectionID=${item.id}&level=${
                item.gradeLevel
              }`}
            />
          </>
        ),
      };
    }),
  });

  return (
    <>
      <ManageSectionModal
        onHide={() => {
          setdata(null);
          setisModalShown(false);
        }}
        isModalShown={isModalShown}
        data={data}
      />
      <CardContainer
        title="SECTION/S"
        isAddComponentPresent={true}
        addComponentTitle="Add New Section"
        addComponentFunction={() => {
          setisModalShown(true);
        }}
        insideTitle="Section/s"
      >
        <Datatable datatable={datatable} />
      </CardContainer>
    </>
  );
};

export default ManageSection;
