function Analysis({ title, incomes, items, displayResults }) {
    if (!displayResults) return null
    
    const percentage = title === 'Needs' ? 0.5 : title === 'Wants' ? 0.3 : 0.2
    const maxAmount = incomes.reduce((prev, current) => prev + Number(current.amount), 0) * percentage
    const totalItems = items.reduce((prev, current) => prev + Number(current.amount), 0)
    const diffAmounts = maxAmount - totalItems

    return (
        <div className='analysis'>
            <div>
                <p>Max Amount</p>
                <p>${maxAmount}</p>
            </div>
            <div>
                <p>{diffAmounts > 0 ? 'Under Budget' : 'Over Budget'}</p>
                <p>${diffAmounts}</p>
            </div>
        </div>
    )
}

export default Analysis