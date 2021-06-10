import React from 'react';
import { Modal } from 'react-bootstrap';

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
