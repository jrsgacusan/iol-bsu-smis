import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// Props

// 'customOnHide' = extra function executed whenever the modal is closed.
// 'title' = title of the modal sheet.
// 'size' = sm for small, and lg for large.
// 'isCentered' = true to center vertically and horizontally, false to center horizontally at the upper part.

import * as actionTypes from '../store/actions';

const CustomModal = ({
  children,
  title = null,
  size,
  isCentered = false,
  customOnHide = () => {},
}) => {
  const isModalShown = useSelector((state) => state.isModalShown);
  const dispatch = useDispatch();

  return (
    <Modal
      size={size === '' || size === null ? '' : size}
      show={isModalShown}
      onHide={() => {
        customOnHide();
        dispatch({ type: actionTypes.SHOW_MODAL });
      }}
      centered={isCentered}
    >
      {title !== null && (
        <Modal.Header closeButton>
          <Modal.Title as="h4">{title}</Modal.Title>
        </Modal.Header>
      )}
      {/* The children will serve as the body of the modal sheet. */}
      {children}
    </Modal>
  );
};

export default CustomModal;
