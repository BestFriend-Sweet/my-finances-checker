function Category(props) {
    const listItems = props.items.map(item => {
        return (
            <div className='line-item'>
                <div>
                    <p>{item.name}</p>
                    <i className="fa-solid fa-trash"></i>
                </div>
                <p>${item.amount}</p>
            </div>  
        )
    })

    const listItemsTotal = props.items.reduce((prev, curr) => {
        return prev += Number(curr.amount)
    }, 0)

    return (
        <div className={`category | ${props.title}`}>
            <p className='title'>{props.title}</p>
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