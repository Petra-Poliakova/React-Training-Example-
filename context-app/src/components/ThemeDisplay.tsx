import React from 'react'
import { useThemeContext, useThemeUpdateContext } from '../context/ThemeContext';

export const ThemeDisplay = () => {
    const darkTheme = useThemeContext();
    const themeToggle = useThemeUpdateContext();

    const themeStyle = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '4rem',
        margin: '2rem 0'
    }
  return (
    <>
        <button onClick={themeToggle}>Toggle Theme</button>
        <div style={themeStyle}>Actual theme is: <strong>{darkTheme ? 'dark' : 'light'}</strong></div>
    </>
  )
}
