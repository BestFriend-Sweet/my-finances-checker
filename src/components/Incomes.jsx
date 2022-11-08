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
            <p className='title'>Incomes</p>
            <div className="line"></div>   
            {listItems}
            <div className='total'>
                <p>Total</p>
                <p>${listItemsTotal}</p>
            </div>
        </div>
    )
}

export default Incomes