import React, { useState, createContext } from 'react';

export const UserContext = createContext(null);

function UserProvider(props) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
