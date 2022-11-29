import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import './UserForm.css';

const UserForm = ({ onCreateUser }) => {
  const [userInput, setUserInput] = useState({
    name: '',
    age: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const ageHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  };
  const nameHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput.name.trim().length === 0) {
      setMessage('Please enter name');
      setTitle('Problem with name input');
      showModalHandler();
      return;
    }

    if (isNaN(userInput.age)) {
      setMessage('Please enter a number');
      setTitle('Problem with age input');
      showModalHandler();
      return;
    }

    if (+userInput.age <= 0 || +userInput.age >= 110) {
      setTitle('Problem with age input');
      setMessage('please enter valid age ( (0,110> ) ');
      showModalHandler();
      return;
    }

    onCreateUser(userInput);
    setUserInput({
      name: '',
      age: '',
    });
  };

  const showModalHandler = () => {
    setShowModal(!showModal);
  };


  return (
    <>
      {showModal && (
        <ErrorModal
          message={message}
          title={title}
          showModal={showModalHandler}
        />
      )}
      <Card className="userForm">
        <h2>Add new user</h2>
        <form onSubmit={submitHandler}>
          <input
            onChange={nameHandler}
            placeholder="Name"
            value={userInput.name}
          ></input>
          <input
            onChange={ageHandler}
            placeholder="Age"
            value={userInput.age}
          />
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
