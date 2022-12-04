import { useContext } from 'react'
import { LanguageContext } from './LanguageProvider'

function LanguageSelector() {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext)

    return (
        <div className="languages">
            <button className={`languages__en-btn | ${userLanguage === 'en' && 'selected'}`} onClick={() => userLanguageChange('en')}>USA</button>
            <button className={`languages__es-btn | ${userLanguage === 'es' && 'selected'}`} onClick={() => userLanguageChange('es')}>Español</button>
        </div>
    )
}

export default LanguageSelector