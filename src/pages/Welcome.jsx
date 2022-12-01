import { Text } from '../components/LanguageProvider'

function Welcome(props) {
    return (
        <main className='welcome'>
            <p className='welcome__title'><Text tid="welcomeMessage1"/> <strong><Text tid="welcomeMessage2" /></strong></p>
            <button className='welcome__btn' onClick={props.onClick}><Text tid="welcomeButton" /></button>
        </main>
    )
}

export default Welcome