import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageDisplay } from './components/LanguageDisplay';

function App() {
  
  return (
    <LanguageProvider>
      <LanguageDisplay/>
    </LanguageProvider>
  );
}

export default App;
