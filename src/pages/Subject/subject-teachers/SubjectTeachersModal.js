import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import CustomModal from '../../../components/CustomModal';
import CustomDropDown from '../../../components/CustomDropDown';

const SubjectTeachersModal = ({
  onhide,
  isModalShown,
  menuItems,
  id = null,
}) => {
  const [selectedItem, setselectedItem] = useState(null);
  const handleSelect = (e) => {
    setselectedItem(e);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (id === null) {
      //Create mode
      console.log('Create Mode');
    } else {
      //Edit mode
      console.log('Edit Mode');
    }
  }

  return (
    <CustomModal
      title={id ? 'Edit Subject Teacjer' : 'Add Subject Teacher'}
      onHide={onhide}
      isModalShown={isModalShown}
    >
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Subject Teacer</Form.Label>
            <CustomDropDown
              selectedItem={selectedItem}
              menuItems={menuItems}
              handleSelect={handleSelect}
              placeHolder="Choose subject teacher."
            />
          </Form.Group>
          <Button variant="success" type="submit">
            {id ? 'Update' : 'Save'}
          </Button>
        </Form>
      </Modal.Body>
    </CustomModal>
  );
};

export default SubjectTeachersModal;
