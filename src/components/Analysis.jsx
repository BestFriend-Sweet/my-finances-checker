function Analysis({ title, incomes, items, displayResults }) {
    if (!displayResults) return null
    
    const percentage = title === 'Needs' ? 0.5 : title === 'Wants' ? 0.3 : 0.2
    const maxAmount = incomes.reduce((prev, current) => prev + Number(current.amount), 0) * percentage
    const totalItems = items.reduce((prev, current) => prev + Number(current.amount), 0)
    const diffAmounts = maxAmount - totalItems

    return (
        <div className='analysis'>
            <div className='analysis__container'>
                <p className='analysis__max-amount-title'>Max Amount</p>
                <p className='analysis__max-amount'>${maxAmount}</p>
            </div>
            <div className='analysis__container' style= {diffAmounts >= 0 ? {color: "green"} : {color: "red"}}>
                <p className='analysis__description'>{diffAmounts > 0 ? 'Under Budget' : 'Over Budget'}</p>
                <p className='analysis__result'>{diffAmounts >= 0 ? "$" + diffAmounts : "-$" + Math.abs(diffAmounts)}</p>
            </div>
        </div>
    )
}

export default Analysis