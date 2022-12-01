import Modal from '../components/Modal'
import { Text } from '../components/LanguageProvider'

function Modals({ isOpen, updateModalState }) {
    return (
        <>
            <Modal isOpen={isOpen.instructions} handleClose={() => updateModalState('instructions')} >
                <div className='modal__content'>
                    <p className='modal__title'><Text tid='instructionsModalTitle' /></p>
                    <ol className='modal__description'>
                        <li className='modal__description-item'><Text tid='instructionsModalExample1' /></li>
                        <li className='modal__description-item'><Text tid='instructionsModalExample2' /></li>
                        <li className='modal__description-item'><Text tid='instructionsModalExample3' /></li>
                        <li className='modal__description-item'><Text tid='instructionsModalExample4' /></li>
                    </ol>
                    <button className='modal__btn' onClick={() => updateModalState('instructions')}><Text tid='closeModalBtn' /></button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.needs} handleClose={() => updateModalState('needs')} >
                <div className='modal__content'>
                    <p className='modal__title'><Text tid='needsModalTitle' /></p>
                    <p className='modal__description'><Text tid='needsModalDescription' /></p>
                    <p className="modal__description"><Text tid='needsModalExample' /></p>
                    <button className='modal__btn' onClick={() => updateModalState('needs')}><Text tid='closeModalBtn' /></button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.wants} handleClose={() => updateModalState('wants')} >
                <div className='modal__content'>
                    <p className='modal__title'><Text tid='wantsModalTitle' /></p>
                    <p className='modal__description'><Text tid='wantsModalDescription' /></p>
                    <p className="modal__description"><Text tid='wantsModalExample' /></p>
                    <button className='modal__btn' onClick={() => updateModalState('wants')}><Text tid='closeModalBtn' /></button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.savings} handleClose={() => updateModalState('savings')} >
                <div className='modal__content'>
                    <p className='modal__title'><Text tid='savingsModalTitle' /></p>
                    <p className="modal__description"><Text tid='savingsModalDescription' /></p>
                    <p className="modal__description"><Text tid='savingsModalExample' /></p>
                    <button className='modal__btn' onClick={() => updateModalState('savings')}><Text tid='closeModalBtn' /></button>
                </div>
            </Modal>
        </>
    )
}

export default Modals