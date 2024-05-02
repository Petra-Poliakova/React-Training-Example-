import React, { createContext, useContext, useState } from 'react'

interface Props {
  children?: React.ReactNode
}

export type Language = { 
  name: string;
}

export const LanguageContext = createContext<Language | undefined | null>(null);

export const LanguageProvider = ({children}: Props) => {
  const [language] = useState<Language>({name: 'en'});

  return (
    <LanguageContext.Provider value={language}>
      {children}
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
