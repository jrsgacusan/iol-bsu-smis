import React from 'react';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

//action is the function executed when the confirm action is clicked.

export const sweetConfirmHandler = (action = () => {}) => {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: 'Are you sure?',
    text: 'Once deleted, you will not be able to recover this imaginary file!',
    type: 'warning',
    showCloseButton: true,
    showCancelButton: true,
  }).then((willDelete) => {
    if (willDelete.value) {
      action();
      return MySwal.fire('', 'Poof! Your data has been deleted!', 'success');
    } else {
      return MySwal.fire('', 'Your data is safe!', 'error');
    }
  });
};

//action is the function executed when the confirm action is clicked.

const DeleteBtnWithAlert = ({ action }) => {
  return (
    <>
      <Button
        title="Delete"
        variant="danger"
        onClick={() => {
          sweetConfirmHandler(action);
        }}
      >
        <Trash color="white" />
      </Button>
    </>
  );
};

export default DeleteBtnWithAlert;
