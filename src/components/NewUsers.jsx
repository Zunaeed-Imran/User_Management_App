import React, { useContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../context/UsersContext';

const NewUsers = () => {
  const { setUsers } = useContext(UserContext);

  const [userName, setUserName] = useState('');

  const handleUserNameChange = event => {
    setUserName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = { id: uuidv4().toString(), userName: userName };
    handleAddNewUser(newUser);
    setUsers('');
  };

  return (
    <>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userName}
          onChange={handleUserNameChange}
        />

        <button>Add</button>
      </form>
    </>
  );
};

export default NewUsers;

