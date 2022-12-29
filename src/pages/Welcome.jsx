import { Text } from '../components/LanguageProvider'

function Welcome(props) {
    return (
        <main className='welcome'>
            <p className='welcome__title'><Text tid="welcomeMessage1"/> 
            <strong><Text tid="welcomeMessage2" /></strong></p>

            <button className='welcome__btn' onClick={props.onClick}>
             <span className="btnText"> <Text tid="welcomeButton" /> </span>
            <span className="btn__anime"></span>
            </button>
        </main>
    )
}

export default Welcome