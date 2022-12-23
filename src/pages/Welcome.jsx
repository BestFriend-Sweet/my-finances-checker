function Welcome(props) {
    return (
        <main className='welcome'>
            <p className='welcome__title'>Welcome to <strong>My Finances Checker!</strong></p>
            <button className='welcome__btn' onClick={props.onClick}> 
            <span className="btnText">Start</span>
            <span className="btn__anime"></span>
            </button>
        </main> 
    )
}

export default Welcome