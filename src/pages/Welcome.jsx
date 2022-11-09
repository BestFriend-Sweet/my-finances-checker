function Welcome(props) {
    return (
        <main className='welcome'>
            <p className='welcome__title'>Welcome to <strong>My Finances Checker!</strong></p>
            <button className='welcome__btn' onClick={props.onClick}>Start</button>
        </main>
    )
}

export default Welcome