import { NavLink } from 'react-router-dom'
import { Text } from '../components/LanguageProvider'

function Header() {
    return (
        <header className='header'>
            <p className='header__logo'><Text tid='headerLogo' /></p>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <NavLink to='fundamentals' className={"headerLink"}>
                        <li className='header__item'><Text tid='headerNav1' /></li>
                        <i className="fa-solid fa-book"></i>
                    </NavLink>
                    <NavLink to='calculator' className={"headerLink"}>
                        <li className='header__item'><Text tid='headerNav2' /></li>
                        <i className="fa-solid fa-calculator"></i>
                    </NavLink>                    
                </ul>
            </nav>
        </header>
    )
}

export default Header