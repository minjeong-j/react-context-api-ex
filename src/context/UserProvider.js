// src/context/UserProvider.js
import React, { useState } from 'react';
import { UserContext } from './UserContext';

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: '홍길동', age: 25 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;