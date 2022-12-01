import { Text } from '../components/LanguageProvider'

function Message({ displayResults, isBudgetHealthy }) {
    if (!displayResults) return null

    return (
        <div className='message'>
            {isBudgetHealthy ?
                <p><Text tid='goodResultMessage' /></p> :
                <p><Text tid='badResultMessage' /></p>
            }
        </div>
    )
}

export default Message