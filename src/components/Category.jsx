import LineItem from './LineItem'

function Category({ title, items }) {
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
            <div className='analysis'>
                <div>
                    <p>Max Amount</p>
                    <p>$1900</p>
                </div>
                <div>
                    <p>Over Budget</p>
                    <p>$150</p>
                </div>
            </div>
        </div>
    )
}

export default Category