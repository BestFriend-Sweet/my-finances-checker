import LineItem from './LineItem'
import Analysis from './Analysis'
import { Text } from '../components/LanguageProvider'

function Category({ title, budget, displayResults, removeFromBudget, updateModalState }) {
    const sortedItems = [...budget[title]].sort((a,b) => b.amount - a.amount)

    const listItems = sortedItems.map(item => {
        return <LineItem key={item.id} item={item} removeFromBudget={removeFromBudget} />
    })

    const listItemsTotal = budget[title].reduce((prev, curr) => {
        return prev += Number(curr.amount)
    }, 0)

    let titleDisplayed = ''

    switch (title) {
        case 'incomes':
            titleDisplayed = <Text tid='incomesTitle' />
            break
        case 'needs':
            titleDisplayed = <Text tid='needsTitle' />
            break
        case 'wants':
            titleDisplayed = <Text tid='wantsTitle' />
            break
        case 'savings':
            titleDisplayed = <Text tid='savingsTitle' />
            break
    }

    return (
        <div className={`category | ${title}`}>
            <div className='category__title'>
                <p className='category__title-name'>{titleDisplayed}</p>
                {title !== 'incomes' && <i className="fa-solid fa-circle-info" onClick={() => updateModalState(title)}></i>}
            </div>
            <div className="category__line"></div>   
            {listItems}
            <div className='category__total'>
                <p className='category__total-title'><Text tid='categoryTotal' /></p>
                <p className='category__total-amount'><Text tid='currencySymbol' />{listItemsTotal}</p>
            </div>
            <Analysis title={title} budget={budget} displayResults={displayResults} />
        </div>
    )
}

export default Category