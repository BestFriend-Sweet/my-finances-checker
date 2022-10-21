function Category(props) {
    return (
        <div className="category">
            <p className='title'>{props.title}</p>
            <div className="line"></div>
            <div className='line-item'>
                <div>
                    <p>House</p>
                    <i className="fa-solid fa-trash"></i>
                </div>
                <p>$1000</p>
            </div>           
            <div className='line-item'>
                <div>
                    <p>House</p>
                    <i className="fa-solid fa-trash"></i>
                </div>
                <p>$1000</p>
            </div>           
            <div className='total'>
                <p>Total</p>
                <p>$1000</p>
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