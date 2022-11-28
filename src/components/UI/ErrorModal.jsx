import React from 'react';
import Card from './Card';
import './ErrorModal.css';
import Button from '../UI/Button';

const ErrorModal = ({ className, message, title, showModal }) => {
  const classes = className;
  return (
    <div>
      <div className={`modal-screen ${classes}`} onClick={showModal} />
      <Card className="modal-body">
        <h2>{title}</h2>
        <div className="message">{message}</div>
        <Button onClick={showModal}>Accept</Button>
      </Card>
    </div>
  );
};

export default ErrorModal;
