import React from 'react'

const User = ({ user, handleDeleteUser }) => {
  const { id, userName } = user;

  return (
    <>
      <article>
        <h2>{id}</h2>
        <h3>{userName}</h3>
        <button onClick={() => {
          handleDeleteUser(id);
        }}>Delete</button>
        
      </article>
    </>
  );
};

export default User;
