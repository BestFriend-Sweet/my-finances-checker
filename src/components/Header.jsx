import { Link } from 'react-router-dom'
import { Text } from '../components/LanguageProvider'

function Header() {
    return (
        <header className='header'>
            <p className='header__logo'><Text tid='headerLogo' /></p>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <Link to='fundamentals'>
                        <li className='header__item'><Text tid='headerNav1' /></li>
                        <i className="fa-solid fa-book"></i>
                    </Link>
                    <Link to='calculator'>
                        <li className='header__item'><Text tid='headerNav2' /></li>
                        <i className="fa-solid fa-calculator"></i>
                    </Link>                    
                </ul>
            </nav>
        </header>
    )
}

export default Header