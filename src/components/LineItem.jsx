import useHover from '../hooks/useHover'

function LineItem({ item }) {
    const { isHovered, hoverRef } = useHover()

    return (
        <div className='line-item' ref={hoverRef}>
            <div>
                <p>{item.name}</p>
                {isHovered && <i className="fa-solid fa-trash"></i>}
            </div>
            <p>${item.amount}</p>
        </div>
    )
}

export default LineItem