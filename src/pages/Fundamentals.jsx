function Fundamentals() {
    return (
        <main className='fundamentals'>
            <h1 className='fundamentals__title'>The 50/30/20 rule explained!</h1>
            <p className='fundamentals__description'>It's a popular budgeting method that distributes income into 3 main categories.</p>
            <div className='fundamentals__container'>
                <h2 className='fundamentals__subtitle'>Monthly income.</h2>
                <i className="fa-solid fa-sack-dollar"></i>
            </div>
            <p className='fundamentals__description'>This amount is your monthly income after taxes. There can be more than one. If it's the salary from work just remove the taxes not other amounts that are usually deducted.</p>
            <div className='fundamentals__container'>
                <h2 className='fundamentals__subtitle'>50% of your income: needs.</h2>
                <i className="fa-solid fa-house"></i>
            </div>
            <p className='fundamentals__description'>Necessities are the expenses we can not live without. Here are some examples:</p>
            <ul className='fundamentals__list'>
                <li className='fundamentals__item'>Housing.</li>
                <li className='fundamentals__item'>Food.</li>
                <li className='fundamentals__item'>Transportation.</li>
                <li className='fundamentals__item'>Insurance.</li>
                <li className='fundamentals__item'>Minimum loan payments. Anything beyond the minimum goes into savings.</li>
                <li className='fundamentals__item'>Expenses you need to cover so you can work, child care for example.</li>
            </ul>
            <div className='fundamentals__container'>
                <h2 className='fundamentals__subtitle'>30% of your income: wants.</h2>
                <i className="fa-solid fa-plane-departure"></i>
            </div>
            <p className='fundamentals__description'>Wants are the extras we do for fun. They are not essential as in we can live without them. Here are some examples:</p>
            <ul className='fundamentals__list'>
                <li className='fundamentals__item'>Monthly subscriptions.</li>
                <li className='fundamentals__item'>Travel.</li>
                <li className='fundamentals__item'>Entertainment.</li>
                <li className='fundamentals__item'>Meals out.</li>
            </ul>
            <div className='fundamentals__container'>
                <h2 className='fundamentals__subtitle'>20% of your income: savings.</h2>
                <i className="fa-solid fa-piggy-bank"></i>
            </div>
            <p className='fundamentals__description'>Savings is the category we set aside to prepare for the future. We start by repaying debt. High-interest accounts should be targeted first.
            Here are some examples:</p>
            <ul className='fundamentals__list'>
                <li className='fundamentals__item'>Starting and growing an emergency fund.</li>
                <li className='fundamentals__item'>Saving for retirement.</li>
                <li className='fundamentals__item'>Paying off debt.</li>
            </ul>
            <p className='fundamentals__note'>This page was based on this <a href='https://www.nerdwallet.com/article/finance/nerdwallet-budget-calculator' target='_blank'><strong>article</strong></a> from NerdWallet.</p>
        </main>
    )
}

export default Fundamentals