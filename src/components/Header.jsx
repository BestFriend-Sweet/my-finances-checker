import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <p>My Finances Checker!</p>
            <nav>
                <ul>
                    <Link to='fundamentals'>
                        <li>Fundamentals</li>
                    </Link>
                    <Link to='calculator'>
                        <li>Calculator</li>
                    </Link>                    
                </ul>
            </nav>
        </header>
    )
}

export default Header