import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './ErrorModal.css';
import Button from '../UI/Button';

const Backdrop = ({ showModal, className }) => {
  return <div className={`modal-screen ${className}`} onClick={showModal} />;
};

const ModalOverlay = ({ showModal, message, title }) => {
  return (
    <Card className="modal-body">
      <h2>{title}</h2>
      <div className="message">{message}</div>
      <Button onClick={showModal}>Accept</Button>
    </Card>
  );
};
const ErrorModal = ({ showModal, className, title, message }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop showModal={showModal} className={className} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} showModal={showModal} />,
        document.getElementById('modal')
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
