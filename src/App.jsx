import { useState } from 'react';
import './App.css';
import NewUser from './components/NewUser/NewUser';
import ModalError from './components/UI/ErrorModal';
import UserList from './components/User/UserList';

function App() {
  const DUMMY_USERS = [
    {
      id: 0,
      name: 'Dominik',
      age: 20,
    },
    {
      id: 1,
      name: 'Matus',
      age: 30,
    },
  ];

  const [users, setUsers] = useState(DUMMY_USERS);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const [showErrorModal, setShowErrorModal] = useState('false');

  const showModalHandler = () => {};

  return (
    <div className="App">
      <NewUser
        addUserHandler={addUser}
        onShowModal={() => console.log('hello')}
      />
      <UserList users={users} />
    </div>
  );
}

export default App;
