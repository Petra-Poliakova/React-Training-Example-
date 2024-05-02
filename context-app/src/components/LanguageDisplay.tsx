import React from 'react'
import { useLanguageContext, useLanguageUpdateContext } from '../context/LanguageContext'

export const LanguageDisplay = () => {
    const currentLanguage = useLanguageContext();
    const toggleLanguage = useLanguageUpdateContext();

  return (
  <>
    <button onClick={() => toggleLanguage('en')} style={{ fontWeight: currentLanguage?.name === 'en' ? 'bold' : 'normal' }}>EN</button>
    <button onClick={() => toggleLanguage('sk')} style={{ fontWeight: currentLanguage?.name === 'sk' ? 'bold' : 'normal' }}>SK</button>
    <div>Actual language is <strong>{currentLanguage?.name}</strong></div>
  </>
    
  )
}
