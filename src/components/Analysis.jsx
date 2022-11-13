function Analysis({ title, budget, displayResults }) {
    if (!displayResults || title === 'incomes') return null
    
    const percentage = title === 'needs' ? 0.5 : title === 'wants' ? 0.3 : 0.2
    const maxAmount = budget.incomes.reduce((prev, current) => prev + Number(current.amount), 0) * percentage
    const totalItems = budget[title].reduce((prev, current) => prev + Number(current.amount), 0)
    const diffAmounts = maxAmount - totalItems

    return (
        <div className='analysis'>
            <div className='analysis__container'>
                <p className='analysis__max-amount-title'>Max Amount</p>
                <p className='analysis__max-amount'>${maxAmount}</p>
            </div>
            <div className='analysis__container' style= {diffAmounts > 0 ? {color: "green"} : diffAmounts < 0 ? {color: "red"} : {color: "black"}}>
                <p className='analysis__description'>{diffAmounts > 0 ? 'Under Budget' : 'Over Budget'}</p>
                <p className='analysis__result'>{diffAmounts >= 0 ? "$" + diffAmounts : "-$" + Math.abs(diffAmounts)}</p>
            </div>
        </div>
    )
}

export default Analysis