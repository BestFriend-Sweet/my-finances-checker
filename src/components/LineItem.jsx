import useHover from '../hooks/useHover'

function LineItem({ item, removeFromBudget }) {
    const { isHovered, hoverRef } = useHover()

    return (
        <div className='line-item' ref={hoverRef}>
            <div className='line-item__container'>
                <p className='line-item__name'>{item.name}</p>
                {isHovered && <i className="fa-solid fa-trash" onClick={() => removeFromBudget(item)}></i>}
            </div>
            <p className='line-item__amount'>${item.amount}</p>
        </div>
    )
}

export default LineItem