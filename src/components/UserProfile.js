// src/components/UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeProvider';

function UserProfile() {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h2>사용자 정보</h2>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
    </div>
  );
}

export default UserProfile;