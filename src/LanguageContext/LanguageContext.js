import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('Kor');
    const [ false1, setFalse1] = useState(false)
    const handleFalse = ()=>{
        setFalse1(true)
      }
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <LanguageContext.Provider 
            value={{ 
                language,
                setLanguage,
                handleLanguageChange,
                handleFalse
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
