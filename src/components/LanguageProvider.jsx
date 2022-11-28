import { useState, createContext, useContext } from 'react'
import dictionaryList from '../languages/language.js'

const LanguageContext = createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.en
})

function LanguageProvider({ children }) {
    const [userLanguage, setUserLanguage] = useState('es')
    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: newLanguage => setUserLanguage(newLanguage)
    }

    return (
        <LanguageContext.Provider value={provider}>
            {children}
       </LanguageContext.Provider> 
    )
}

function Text({ tid }) {
    const languageContext = useContext(LanguageContext)
    return languageContext.dictionary[tid] || tid
}

export { LanguageProvider, Text } 