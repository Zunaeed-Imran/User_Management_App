import React, { useState } from 'react';
import Users from '../components/Users';
import NewUsers from '../components/NewUsers';
import { UserContext } from '../context/UsersContext';

const Simple_App = () => {
  const [users, setUsers] = useState([
    { id: 520, userName: 'Zunaeed Imran' },
    { id: 508, userName: 'Rakibul Islam' },
  ]);

  const handleAddNewUser = newuser => {
    setUsers(prev => [...prev, newuser]);
  };

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div>
        <NewUsers />
        <Users />
      </div>
    </UserContext.Provider>
  );
};

export default Simple_App;
