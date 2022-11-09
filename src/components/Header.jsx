import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <p className='header__logo'>My Finances Checker!</p>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <Link to='fundamentals'>
                        <li className='header__item'>Fundamentals</li>
                        <i className="fa-solid fa-book"></i>
                    </Link>
                    <Link to='calculator'>
                        <li className='header__item'>Calculator</li>
                        <i className="fa-solid fa-calculator"></i>
                    </Link>                    
                </ul>
            </nav>
        </header>
    )
}

export default Header