function getPercentage(title) {
    let percentage = 0
    switch (title) {
        case 'needs':
            percentage = 0.5
            break
        case 'wants':
            percentage = 0.3
            break
        case 'savings':
            percentage = 0.2
            break
    } 
    return percentage
}

function getMaxAmount(incomes, percentage) {
    const maxAmount = incomes.reduce((prev, current) => prev + Number(current.amount), 0) * percentage
    return (maxAmount * percentage * 100) % 100 !== 0 ? maxAmount.toFixed(1) : maxAmount
}

function getTotalCategory(category) {
    return category.reduce((prev, current) => prev + Number(current.amount), 0)
}

function getDiffAmounts(maxAmount, totalCategory) {
    const diffAmounts = maxAmount - totalCategory
    return maxAmount % 1 !== 0 ? diffAmounts.toFixed(1) : diffAmounts
}

export {getPercentage, getMaxAmount, getTotalCategory, getDiffAmounts}