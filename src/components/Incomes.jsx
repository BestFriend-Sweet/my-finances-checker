import LineItem from './LineItem'

function Incomes({ items }) {
    const listItems = items.map((item, index) => {
        return <LineItem key={index} item={item} />
    })

    const listItemsTotal = items.reduce((prev, curr) => {
        return prev += Number(curr.amount)
    }, 0)

    return (
        <div className={`category | Incomes`}>
            <p className='category__title'>Incomes</p>
            <div className="category__items"></div>   
            {listItems}
            <div className='category__total'>
                <p className='category__total-title'>Total</p>
                <p className='category__total-amount'>${listItemsTotal}</p>
            </div>
        </div>
    )
}

export default Incomes