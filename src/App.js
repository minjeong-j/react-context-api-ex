// src/App.js
import React from 'react';
import UserProvider from './context/UserProvider';
import ThemeProvider from './context/ThemeProvider';
import UserProfile from './components/UserProfile';
import ThemeToggler from './components/ThemeToggler';

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <UserProfile />
          <ThemeToggler />
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;