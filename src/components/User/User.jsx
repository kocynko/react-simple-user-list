import React from 'react';
import './User.css';
import Card from '../UI/Card';
const User = ({ name, age }) => {
  return (
    <li className="user">
      <div className="user-name">{name}</div>
      <div className="user-age">{age}'s old</div>
    </li>
  );
};

export default User;
