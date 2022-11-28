import React from 'react';
import UserForm from './UserForm';
const NewUser = ({ addUserHandler }) => {
  const createUserHandler = (userFromInput) => {
    const newUser = {
      ...userFromInput,
      id: Math.random(),
    };
    addUserHandler(newUser);
    console.log(newUser);
  };

  return <UserForm onCreateUser={createUserHandler} />;
};

export default NewUser;
