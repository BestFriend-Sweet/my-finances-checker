import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <p>My Finances Checker!</p>
            <nav>
                <ul>
                    <Link to='fundamentals'>
                        <li>Fundamentals</li>
                        <i className="fa-solid fa-book"></i>
                    </Link>
                    <Link to='calculator'>
                        <li>Calculator</li>
                        <i className="fa-solid fa-calculator"></i>
                    </Link>                    
                </ul>
            </nav>
        </header>
    )
}

export default Header