import classes from '../Subject.module.css';
import React, { useState } from 'react';
import CardContainer from '../../../components/CardContainer';
import AddComponent from '../../../components/AddComponent';
import Datatable from '../../../components/Datatable';
import { Col, Row, Button } from 'react-bootstrap';
import { Eye, PencilSquare } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import SubjectModal from './SubjectModal';
import DeleteBtnWithAlert from '../../../components/DeleteBtnWithAlert';
import { SUBJ_DUMMY_DATA } from '../../../dummy-data/subject';

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
            <Button
              title="Edit"
              variant="success"
              onClick={() => {
                setschoolYearToEdit(item.sy);
                setidToEdit(item.id);
                setisModalShown(true);
              }}
            >
              <PencilSquare color="white" />
            </Button>
            <Link to={`/subject-details?sy=${item.sy}&id=${item.id}`}>
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

      <CardContainer title="SCHOOL YEAR/S">
        <Row>
          <Col className={classes.div}>
            <h3>School Year/s Table</h3>
            <AddComponent
              title="Add New School Year"
              onClick={() => {
                setisModalShown(true);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Datatable
            datatable={dataTable}
            className={classes['data-table-container']}
          />
        </Row>
      </CardContainer>
    </>
  );
};

export default Subject;
