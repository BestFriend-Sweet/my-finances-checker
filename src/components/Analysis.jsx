import { getPercentage, getMaxAmount, getTotalCategory, getDiffAmounts } from '../utils/Calculations'
import { Text } from '../components/LanguageProvider'

function Analysis({ title, budget, displayResults }) {
    if (!displayResults || title === 'incomes') return null
    
    const percentage = getPercentage(title)
    const maxAmount = getMaxAmount(budget.incomes, percentage)
    const totalItems = getTotalCategory(budget[title])
    const diffAmounts = getDiffAmounts(maxAmount, totalItems)

    let color = 'black';

    if (diffAmounts > 0) {
        color = (title != 'savings' ? 'green' : 'red');
    }
    else if (diffAmounts < 0) {
        color = (title != 'savings' ? 'red' : 'green');
    }

    let idOfAmountText = (title != 'savings' ? 'maxAmount' : 'minAmount')

    return (
        <div className='analysis'>
            <div className='analysis__container'>
                <p className='analysis__max-amount-title'><Text tid={idOfAmountText} /></p>
                <p className='analysis__max-amount'><Text tid='currencySymbol' />{maxAmount}</p>
            </div>
            <div className='analysis__container' style={{color}}>
                <p className='analysis__description'>{diffAmounts > 0 ? <Text tid='underBudget' /> : <Text tid='overBudget' />}</p>
                <p className='analysis__result'>
                    {diffAmounts >= 0 ? <span><Text tid='currencySymbol' />{diffAmounts}</span> :
                    <span><Text tid='currencySymbol' />{Math.abs(diffAmounts)}</span>}
                </p>
            </div>
        </div>
    )
}

export default Analysis