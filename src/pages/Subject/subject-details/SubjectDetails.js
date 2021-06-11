import classes from '../Subject.module.css';
import React, { useEffect, useState } from 'react';
import CardContainer from '../../../components/CardContainer';
import { Row, Col, Button } from 'react-bootstrap';
import { PencilSquare, Eye } from 'react-bootstrap-icons';
import DeleteBtnWithAlert from '../../../components/DeleteBtnWithAlert';
import { SUBJ_DETAILS_DUMMY_DATA } from '../../../dummy-data/subject-details';
import SubjectDetailsModal from './SubjectDetailsModal';
import AddComponent from '../../../components/AddComponent';
import Datatable from '../../../components/Datatable';
import { Link } from 'react-router-dom';
import { set } from 'date-fns';

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
    label: 'Subject',
    field: 'subject',
  },
  {
    label: 'Subject Description',
    field: 'subjectDescription',
  },
  {
    label: 'Offered To',
    field: 'offeredTo',
  },
  {
    label: 'Action',
    field: 'action',
    sort: 'disabled',
  },
];

const SubjectDetails = ({ location }) => {
  const params = new URLSearchParams(location.search);
  //states for the query params
  const [sy, setsy] = useState(null);
  const [id, setid] = useState(null);
  //state for the add subject model
  const [isModalShown, setisModalShown] = useState(false);
  //states for the edit subject modal
  const [idToEdit, setidToEdit] = useState(null);
  const [subjToEdit, setsubjToEdit] = useState('');
  const [descriptionToEdit, setdescriptionToEdit] = useState('');
  const [offeredToEdit, setofferedToEdit] = useState('');
  //Data of datatable
  const [datatable, setdatatable] = useState({
    columns: columns,
    rows: SUBJ_DETAILS_DUMMY_DATA.map((datum) => {
      return {
        id: datum.id,
        departmentId: datum.departmentId,
        subject: datum.subject,
        subjectDescription: datum.subjectDescription,
        offeredTo: datum.offeredTo,
        action: (
          <>
            <DeleteBtnWithAlert
              action={() => {
                alert(`Delete subject: ${datum.id}:${datum.subject}`);
                deleteRow(datum.id);
              }}
            />
            <Button
              title="Edit"
              variant="success"
              onClick={() => {
                setidToEdit(datum.id);
                setsubjToEdit(datum.subject);
                setdescriptionToEdit(datum.subjectDescription);
                setofferedToEdit(datum.offeredTo);
                setisModalShown(true);
              }}
            >
              <PencilSquare color="white" />
            </Button>

            <Link
              to={`/subject-teachers?id=${datum.id}&sy=${params.get('sy')}`}
            >
              <Button title="View Subject Teachers" variant="primary">
                <Eye color="white" />
              </Button>
            </Link>
          </>
        ),
      };
    }),
  });

  function deleteRow(id) {
    setdatatable((prevState) => {
      let filteredRows = prevState.rows.filter((row) => row.id !== id);
      return { columns: columns, rows: filteredRows };
    });
  }

  useEffect(() => {
    //get all URL Params
    const params = new URLSearchParams(location.search);
    //get the id params
    const idParams = params.get('id');
    //get the sy params
    const syParams = params.get('sy');
    //set these to the state
    setsy(syParams);
    setid(idParams);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <SubjectDetailsModal
        id={idToEdit}
        subjectTitle={subjToEdit}
        subjectDescription={descriptionToEdit}
        offeredTo={offeredToEdit}
        onHide={() => {
          setsubjToEdit('');
          setdescriptionToEdit('');
          setofferedToEdit('');
          setidToEdit(null);
          setisModalShown(false);
        }}
        isModalShown={isModalShown}
      />
      <CardContainer title="SUBJECT/S">
        <Row>
          <Col className={classes.div}>
            <h3>Subject/s Table</h3>
            <AddComponent
              title="Add New Subject"
              onClick={() => {
                setisModalShown(true);
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

export default SubjectDetails;
