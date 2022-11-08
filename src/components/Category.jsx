import LineItem from './LineItem'
import Analysis from './Analysis'

function Category({ title, incomes, items, displayResults }) {
    const listItems = items.map((item, index) => {
        return <LineItem key={index} item={item} />
    })

    const listItemsTotal = items.reduce((prev, curr) => {
        return prev += Number(curr.amount)
    }, 0)

    return (
        <div className={`category | ${title}`}>
            <p className='title'>{title}</p>
            <div className="line"></div>   
            {listItems}
            <div className='total'>
                <p>Total</p>
                <p>${listItemsTotal}</p>
            </div>
            <Analysis title={title} incomes={incomes} items={items} displayResults={displayResults} />
        </div>
    )
}

export default Category