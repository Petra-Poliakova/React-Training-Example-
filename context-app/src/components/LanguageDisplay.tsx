import React from 'react'
import { useLanguageContext } from '../context/LanguageContext'

export const LanguageDisplay = () => {
    const currentLanguage = useLanguageContext();

  return (
    <div>Actual language is <strong>{currentLanguage?.name}</strong></div>
  )
}
