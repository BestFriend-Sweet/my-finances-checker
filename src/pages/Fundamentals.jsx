function Fundamentals() {
    return (
        <main className='fundamentals'>
            <h1 className='fundamentals__title'>What is the 50/30/20 budget? - <a href="https://www.nerdwallet.com/article/finance/nerdwallet-budget-calculator" target="_blank">NerdWallet</a></h1>
            <p className='fundamentals__description'>The 50/30/20 rule is a popular budgeting method that splits your monthly income among three main categories. Here's how it breaks down:</p>
            <div className='fundamentals__container'>
                <h2 className='fundamentals__subtitle'>Monthly after-tax income.</h2>
                <i className="fa-solid fa-sack-dollar"></i>
            </div>
            <p className='fundamentals__description'>This figure is your income after taxes have been deducted. It's likely you'll have additional payroll deductions for things like health insurance, 401(k) contributions or other automatic payments taken from your salary. Don't subtract those from your gross (before tax) income. If you've lumped them in with your taxes, you'll want to separate them out — subtract only taxes from your gross income</p>
            <div className='fundamentals__container'>
                <h2 className='fundamentals__subtitle'>50% of your income: needs.</h2>
                <i className="fa-solid fa-house"></i>
            </div>
            <p className='fundamentals__description'>Necessities are the expenses you can't avoid. This portion of your budget should cover required costs such as:</p>
            <ul className='fundamentals__list'>
                <li className='fundamentals__item'>Housing.</li>
                <li className='fundamentals__item'>Food.</li>
                <li className='fundamentals__item'>Transportation.</li>
                <li className='fundamentals__item'>Basic utilities.</li>
                <li className='fundamentals__item'>Insurance.</li>
                <li className='fundamentals__item'>Minimum loan payments. Anything beyond the minimum goes into the savings and debt repayment bucket.</li>
                <li className='fundamentals__item'>Child care or other expenses that need to be covered so you can work.</li>
            </ul>
            <div className='fundamentals__container'>
                <h2 className='fundamentals__subtitle'>30% of your income: wants.</h2>
                <i className="fa-solid fa-plane-departure"></i>
            </div>
            <p className='fundamentals__description'>Distinguishing between needs and wants isn't always easy and can vary from one budget to another. Generally, though, wants are the extras that aren’t essential to living and working. They’re often for fun and may include:</p>
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
            <p className='fundamentals__description'>Savings is the amount you sock away to prepare for the future. Devote this chunk of your income to paying down existing debt and creating a financial cushion.</p>
            <p className='fundamentals__description'>How, exactly, to use this part of your budget depends on your situation, but it will likely include:</p>
            <ul className='fundamentals__list'>
                <li className='fundamentals__item'>Starting and growing an emergency fund.</li>
                <li className='fundamentals__item'>Saving for retirement through a 401(k) and perhaps an individual retirement account.</li>
                <li className='fundamentals__item'>Paying off debt, beginning with high-interest accounts like credit cards.</li>
            </ul>
        </main>
    )
}

export default Fundamentals