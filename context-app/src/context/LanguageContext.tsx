import React, { createContext, useContext, useState } from 'react'

interface Props {
  children?: React.ReactNode
}

export type Language = { 
  name: string;
}

export const LanguageContext = createContext<Language | undefined | null>(null);
export const LanguageUpdateContext = createContext<((lang: string) => void) | undefined | null>(null);

export const LanguageProvider = ({children}: Props) => {
  const [language, setLanguage] = useState<Language>({name: 'en'});

  const toggleLanguage = (lang: string) => { setLanguage({name: lang})}

  return (
    <LanguageContext.Provider value={language}>
      <LanguageUpdateContext.Provider value={toggleLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
      
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => {
  const language = useContext(LanguageContext);
  if(language === null) {
    throw new Error('useLanguageContext must be used within a LanguageProvider')
  }
  return language;
}

export const useLanguageUpdateContext = () => {
  const toggleLanguage = useContext(LanguageUpdateContext);
  if(!toggleLanguage) {
    throw new Error('useLanguageUpdateContext must be used within a LanguageProvider')
  }
  return toggleLanguage;
}
