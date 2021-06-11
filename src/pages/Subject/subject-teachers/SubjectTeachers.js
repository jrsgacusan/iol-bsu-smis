import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Eye, PencilSquare } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import AddComponent from '../../../components/AddComponent';
import CardContainer from '../../../components/CardContainer';
import Datatable from '../../../components/Datatable';
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
            <Button
              title="Edit"
              variant="success"
              onClick={() => {
                setidToEdit(item.id);

                setisAddModalShown(true);
              }}
            >
              <PencilSquare color="white" />
            </Button>
            <Link
              to={`/subject-students?teachersid=${
                item.teacherId
              }&sy=${params.get('sy')}&subjectid=${item.id}`}
            >
              <Button title="View Subjects" variant="primary">
                <Eye color="white" />
              </Button>
            </Link>
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
      <CardContainer title="SUBJECT TEACHER/S">
        <Row>
          <Col className={classes.div}>
            <h3>{params.get('id')}</h3>
            <AddComponent
              title="Add New Subject Teacher"
              onClick={() => {
                setisAddModalShown(true);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Datatable
            datatable={datatable}
            className={classes['data-table-container']}
          />
        </Row>
      </CardContainer>
    </>
  );
};

export default SubjectTeachers;
