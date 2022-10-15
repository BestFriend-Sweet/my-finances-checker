import Adder from '../components/Adder'

function Calculator() {
    return (
        <main className='calculator'>
            <section className='calculator__buttons'>
                <button>Instructions</button>
                <button>Tips Wants</button>
                <button>Tips Needs</button>
                <button>Tips Savings</button>
            </section>

            <Adder />
        </main>
    )
}

export default Calculator