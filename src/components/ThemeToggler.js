// src/components/ThemeToggler.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        marginTop: '20px',
        padding: '10px 20px',
        cursor: 'pointer',
      }}
    >
      현재 테마: {theme === 'dark' ? '다크' : '라이트'}
    </button>
  );
}

export default ThemeToggler;