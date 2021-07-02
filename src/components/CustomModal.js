import React from 'react';
import { Modal } from 'react-bootstrap';

// Props
// 'isModalShown' = boolean value. True to show the modal, false to hide.
// 'onHide' = the function executed to close the modal.
// 'title' = title of the modal sheet.
// 'size' = sm for small, and lg for large.
// 'isCentered' = true to center vertically and horizontally, false to center horizontally at the upper part.

const CustomModal = ({
  children,
  isModalShown,
  onHide,
  title = null,
  size,
  isCentered = false,
}) => {
  return (
    <Modal
      size={size === '' || size === null ? '' : size}
      show={isModalShown}
      onHide={onHide}
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
