import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import CustomModal from '../../../components/CustomModal';
import InputMask from 'react-input-mask';

//data properties
//id , firstName, midName, lastName, address, personToContact,emergencyNum,role,sy

//Helper function
const validateValue = (value) => value.trim() !== '';
const validateNum = (value) => value.length !== 11;
const validateSy = (value) => value.trim().length !== 9;

const DepartmentDetailsModal = ({ onHide, isModalShown, data = null }) => {
  const isNull = data.id === '';

  const [idNumber, setIdNumber] = useState('');
  const idNumberHandler = (e) => setIdNumber(e.target.value);
  const [firstName, setfirstName] = useState('');
  const firstNameHandler = (e) => setfirstName(e.target.value);
  const [midName, setmidName] = useState('');
  const midNamerHandler = (e) => setmidName(e.target.value);
  const [lastName, setlastName] = useState('');
  const lastNameHandler = (e) => setlastName(e.target.value);
  const [address, setaddress] = useState('');
  const addressHandler = (e) => setaddress(e.target.value);
  const [contactNum, setcontactNum] = useState('');
  const contactNumHandler = (e) => setcontactNum(e.target.value);
  const [personToContact, setpersonToContact] = useState('');
  const personToContactHandler = (e) => setpersonToContact(e.target.value);
  const [emergencyNum, setemergencyNum] = useState('');
  const emergencyNumHandler = (e) => setemergencyNum(e.target.value);
  const [role, setrole] = useState('');
  const roleHandler = (e) => setrole(e.target.value);
  const [sy, setsy] = useState('');
  const syHandler = (e) => setsy(e.target.value);

  useEffect(() => {
    //initialize all values
    setIdNumber(data.id);
    setfirstName(data.firstName);
    setmidName(data.midName);
    setlastName(data.lastName);
    setaddress(data.address);
    setpersonToContact(data.personToContact);
    setemergencyNum(data.emergencyNum);
    setrole(data.role);
    setsy(data.sy);
  }, [data]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (sy.length !== 9) {
      alert('Invalid');
      return;
    }

    if (isNull) {
      //update mode
      console.log('Create mode');
    } else {
      //create mode
      console.log('Update mode');
    }
  };

  return (
    <CustomModal
      size="lg"
      onHide={onHide}
      isModalShown={isModalShown}
      title={isNull ? 'New Faculty/Student' : 'Update Faculty/Student'}
    >
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>ID Number</Form.Label>
            <Form.Control
              required
              disabled
              onChange={idNumberHandler}
              value={!data ? idNumber : data.id}
              placeholder="ID Number"
              type="text"
            />
          </Form.Group>
          <Row>
            <Col md={4}>
              <Form.Group>First Name</Form.Group>
              <Form.Control
                required
                onChange={firstNameHandler}
                value={firstName || ''}
                type="text"
                placeholder="First Name"
              />
            </Col>
            <Col md={4}>
              <Form.Group>Middle Name</Form.Group>
              <Form.Control
                required
                onChange={midNamerHandler}
                value={midName || ''}
                type="text"
                placeholder="Middle Name"
              />
            </Col>
            <Col md={4}>
              <Form.Group>Surname</Form.Group>
              <Form.Control
                required
                onChange={lastNameHandler}
                value={lastName || ''}
                type="text"
                placeholder="Surname"
              />
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              placeholder="Enter full address"
              onChange={addressHandler}
              value={address || ''}
              as="textarea"
              type="text"
              rows={2}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              required
              placeholder="Contact Number"
              onChange={contactNumHandler}
              value={contactNum || ''}
              as="textarea"
              type="text"
              rows={2}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Person to contact in case of emergency</Form.Label>
            <Form.Control
              required
              onChange={personToContactHandler}
              value={personToContact || ''}
              placeholder="Person to contact in case of emergency"
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Emergency Contact #</Form.Label>
            <Form.Control
              required
              value={emergencyNum || ''}
              onChange={emergencyNumHandler}
              placeholder="Emergency Contact #"
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control
              required
              value={role || ''}
              onChange={roleHandler}
              as="select"
            >
              <option>admin</option>
              <option>faculty</option>
              <option>cashier</option>
              {role === 'student' && <option>student</option>}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>School Year</Form.Label>
            <InputMask
              onChange={syHandler}
              value={sy || ''}
              className="form-control"
              type="text"
              maskChar=" "
              mask="9999-9999"
            />
          </Form.Group>
          <Button variant="success" type="submit">
            {isNull ? 'Save' : 'Update'}
          </Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default DepartmentDetailsModal;
