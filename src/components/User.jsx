import React, { useContext } from 'react';
import { UserContext } from '../context/UsersContext';

const User = ({ user }) => {

  const {users, setUsers} = useContext(UserContext)
  const { id, userName } = user;


  const handleDelete = () => {
    const filterUsers = users.filter(user => user.id !== id);
    setUsers(filterUsers);
  };

  return (
    <>
      <article>
        <h2>{userName}</h2>
        <h4>{id}</h4>
        <button
          onClick={handleDelete}
        >
          Delete
        </button>
      </article>
    </>
  );
};

export default User;
