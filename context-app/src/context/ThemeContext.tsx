import React, {createContext, useContext, useState} from 'react'

interface Props {
    children?: React.ReactNode
}
export const ThemeContext = createContext<boolean | null | undefined>(null);
export const ThemeUpdateContext = createContext<(()=> void) | undefined | null>(() => {});

export const ThemeProvider = ({children}: Props) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    const themeToggle = () => {
        setDarkTheme(!darkTheme);
    }


  return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={themeToggle}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
    const darkTheme = useContext(ThemeContext);
    if( darkTheme === null) {
        throw new Error ('useThemeContext must be used within a ThemeProvider')
    }
    return darkTheme;
}

export const useThemeUpdateContext = () => {
    const themeToggle = useContext(ThemeUpdateContext);
    if (themeToggle === null) {
        throw new Error('useThemeUpdateContext must be used within a LanguageProvider')
    }
    return themeToggle;
}



