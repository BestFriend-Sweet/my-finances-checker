import { Text } from '../components/LanguageProvider'
import LanguageSelector from '../components/LanguageSelector'

function Fundamentals() {
    return (
        <main className='fundamentals'>
            <LanguageSelector />

            <h1 className='fundamentals__title'><Text tid='fundamentalsTitle' /></h1>
            <p className='fundamentals__description'><Text tid='fundamentalsTitleDescription' /></p>

            <div className='fundamentals__container main'>
                <h2 className='fundamentals__subtitle'><Text tid='fundamentalsIncomeTitle' /></h2>
                <i className="fa-solid fa-sack-dollar"></i>
                <p className='fundamentals__description'><Text tid='fundamentalsIncomeDescription' /></p>
            </div>
            
            <div className="grid">
                <div className='fundamentals__container'>
                    <h2 className='fundamentals__subtitle'><Text tid='fundamentalsNeedsTitle' /></h2>
                    <i className="fa-solid fa-house"></i>
                    <p className='fundamentals__description'><Text tid='fundamentalsNeedsDescription' /></p>
                    <ul className='fundamentals__list'>
                        <li className='fundamentals__item'><Text tid='fundamentalsNeedsExample1' /></li>
                        <li className='fundamentals__item'><Text tid='fundamentalsNeedsExample2' /></li>
                        <li className='fundamentals__item'><Text tid='fundamentalsNeedsExample3' /></li>
                        <li className='fundamentals__item'><Text tid='fundamentalsNeedsExample4' /></li>
                        <li className='fundamentals__item'><Text tid='fundamentalsNeedsExample5' /></li>
                        <li className='fundamentals__item'><Text tid='fundamentalsNeedsExample6' /></li>
                    </ul>
                </div>

                <div className='fundamentals__container'>
                    <h2 className='fundamentals__subtitle'><Text tid='fundamentalsWantsTitle' /></h2>
                    <i className="fa-solid fa-plane-departure"></i>
                    <p className='fundamentals__description'><Text tid='fundamentalsWantsDescription' /></p>
                    <ul className='fundamentals__list'>
                        <li className='fundamentals__item'><Text tid='fundamentalsWantsExample1' /></li>
                        <li className='fundamentals__item'><Text tid='fundamentalsWantsExample2' /></li>
                        <li className='fundamentals__item'><Text tid='fundamentalsWantsExample3' /></li>
                        <li className='fundamentals__item'><Text tid='fundamentalsWantsExample4' /></li>
                    </ul>
                </div>
                
                <div className='fundamentals__container'>
                    <h2 className='fundamentals__subtitle'><Text tid='fundamentalsSavingsTitle' /></h2>
                    <i className="fa-solid fa-piggy-bank"></i>
                    <p className='fundamentals__description'><Text tid='fundamentalsSavingsDescription' /></p>
                    <ul className='fundamentals__list'>
                        <li className='fundamentals__item'><Text tid='fundamentalsSavingsExample1' /></li>
                        <li className='fundamentals__item'><Text tid='fundamentalsSavingsExample2' /></li>
                        <li className='fundamentals__item'><Text tid='fundamentalsSavingsExample3' /></li>
                    </ul>
                </div>
            </div>
            <p className='fundamentals__note'><Text tid='fundamentalsCredits1' />&nbsp;
                <a href='https://www.nerdwallet.com/article/finance/nerdwallet-budget-calculator' target='_blank'>
                    <strong><Text tid='fundamentalsCredits2' /></strong>&nbsp;
                </a>
                <Text tid='fundamentalsCredits3' />
            </p>
        </main>
    )
}

export default Fundamentals
