import React, { useState } from 'react'
import Users from '../components/Users';
import NewUsers from '../components/NewUsers';

const Simple_App = () => {

  const [users, setUSers] = useState([
    { id: 520, userName: "Zunaeed Imran" },
    { id: 508, userName: "Rakibul Islam"}
  ]);

  const handleDeleteUser = (id) => {
    const filterUser = users.filter(user => user.id !== id)
    setUSers(filterUser);
  }

  const handleAddNewUser = (newuser) => {
    setUSers(prev => [...prev, newuser])
  }

  return (
    <>
      <NewUsers handleAddNewUser={handleAddNewUser} />
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </>
  );
}

export default Simple_App;
