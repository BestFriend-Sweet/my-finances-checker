function Welcome(props) {
    return (
        <main className='welcome'>
            <p>Welcome to <strong>My Finances Checker!</strong></p>
            <button onClick={props.onClick}>Start</button>
        </main>
    )
}

export default Welcome