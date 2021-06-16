import React, { useState } from 'react';
import AddComponent from '../../../../components/AddComponent';
import { sweetConfirmHandler } from '../../../../components/DeleteBtnWithAlert';
import { FACULTY_DUMMY_DATA } from '../../../../dummy-data/faculty';
import classes from './Faculty.module.css';
import FacultyList from './FacultyList';
import FacultyModal from './FacultyModal';

const initialValue = {
  id: '',
  firstName: '',
  midName: '',
  lastName: '',
  address: '',
  personToContact: '',
  emergencyNum: '',
  role: '',
  sy: '',
};

const Faculty = () => {
  const [isModalShown, setisModalShown] = useState(false);
  const [data, setData] = useState(initialValue);

  const showModal = () => {
    setisModalShown(true);
  };
  const editAction = (data) => {
    setData(data);
    setisModalShown(true);
    console.log(data);
  };

  const action = () => {
    alert('deleted!');
  };

  const deleteAction = () => {
    sweetConfirmHandler(action);
  };

  return (
    <>
      <FacultyModal
        data={data}
        onHide={() => {
          setisModalShown(false);
          setData(initialValue);
        }}
        isModalShown={isModalShown}
      />
      <div className={classes.div}>
        <AddComponent title="Add Faculty" onClick={showModal} />
      </div>
      <FacultyList
        deleteAction={deleteAction}
        editAction={editAction}
        list={FACULTY_DUMMY_DATA}
      />
    </>
  );
};

export default Faculty;
