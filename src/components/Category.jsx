import LineItem from './LineItem'
import Analysis from './Analysis'

function Category({ title, budget, displayResults, removeFromBudget, updateModalState }) {
    const listItems = budget[title].map(item => {
        return <LineItem key={item.id} item={item} removeFromBudget={removeFromBudget} />
    })

    const listItemsTotal = budget[title].reduce((prev, curr) => {
        return prev += Number(curr.amount)
    }, 0)

    return (
        <div className={`category | ${title}`}>
            <div className='category__title'>
                <p className='category__title-name'>{title.charAt(0).toUpperCase() + title.slice(1)}</p>
                {title !== 'incomes' && <i className="fa-solid fa-circle-info" onClick={() => updateModalState(title)}></i>}
            </div>
            <div className="category__line"></div>   
            {listItems}
            <div className='category__total'>
                <p className='category__total-title'>Total</p>
                <p className='category__total-amount'>${listItemsTotal}</p>
            </div>
            <Analysis title={title} budget={budget} displayResults={displayResults} />
        </div>
    )
}

export default Category