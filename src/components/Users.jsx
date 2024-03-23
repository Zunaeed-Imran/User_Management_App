import React, { useContext } from 'react';
import User from './User';
import { UserContext } from '../context/UsersContext';

const Users = () => {
  const { users} = useContext(UserContext);
  return (
    <>
      <section>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </section>
    </>
  );
};

export default Users;
