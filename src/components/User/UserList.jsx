import React from 'react';
import Card from '../UI/Card';
import User from './User';
import './UserList.css';

const UserList = ({ users }) => {
  return (
    <Card className="users">
      <h2>USER LIST</h2>
      <div className="user-list">
        <ul>
          {users.map(({ name, age, id }) => (
            <User name={name} age={age} key={id} />
          ))}
        </ul>
      </div>
    </Card>
  );
};
export default UserList;
