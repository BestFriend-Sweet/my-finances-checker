function Message({ displayResults, isBudgetHealthy }) {
    if (!displayResults) return null

    return (
        <div className='message'>
            {isBudgetHealthy ?
                <p>Congratulations 🎉🥳🍾! Your monthly budget is well distributed.</p> :
                <p>Our goal should be to have each category under the max amount, you can add incomes or cut some expenses.</p>
            }
        </div>
    )
}

export default Message