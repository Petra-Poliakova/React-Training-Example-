import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageDisplay } from './components/LanguageDisplay';
import { ThemeDisplay } from './components/ThemeDisplay';

function App() {
  
  return (
    <ThemeProvider>
        <LanguageProvider>
            <ThemeDisplay />
            <LanguageDisplay/>
        </LanguageProvider>
    </ThemeProvider>
    
  );
}

export default App;
