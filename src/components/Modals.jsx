import Modal from '../components/Modal'

function Modals({ isOpen, updateModalState }) {
    return (
        <>
            <Modal isOpen={isOpen.instructions} handleClose={() => updateModalState('instructions')} >
                <div className='modal__content'>
                    <p className='modal__title'>Instructions</p>
                    <ol className='modal__description'>
                        <li className='modal__description-item'>Add incomes and expenses, try to list everything, it will make the results more accurate.</li>
                        <li className='modal__description-item'>If you want to change an income or expense you can delete it and then add it again with the correct information.</li>
                        <li className='modal__description-item'>After you are done and it's looking like it has everything you earn or spend during a regular month click on "Check My Finances!".</li>
                        <li className='modal__description-item'><strong>Extra tip:</strong> At least you need one item per category otherwise you won't be able to click on "Check My Finances!".</li>
                    </ol>
                    <button className='modal__btn' onClick={() => updateModalState('instructions')}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.needs} handleClose={() => updateModalState('needs')} >
                <div className='modal__content'>
                    <p className='modal__title'>Tips Needs</p>
                    <p className='modal__description'>Necessities are the expenses you can't run away from.</p>
                    <p className="modal__description"><strong>For example:</strong> housing, food, transportation, basic utilities, insurance, child care or other expenses that need to be
                        cover so you can work.</p>
                    <button className='modal__btn' onClick={() => updateModalState('needs')}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.wants} handleClose={() => updateModalState('wants')} >
                <div className='modal__content'>
                    <p className='modal__title'>Tips Wants</p>
                    <p className='modal__description'>Wants can be described as the fun items.</p>
                    <p className="modal__description"><strong>For example:</strong> monthly subscriptions, travel, entertainment, meals out.</p>
                    <button className='modal__btn' onClick={() => updateModalState('wants')}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.savings} handleClose={() => updateModalState('savings')} >
                <div className='modal__content'>
                    <p className='modal__title'>Tips Savings</p>
                    <p className="modal__description">Savings is how we prepare for the future. In order to do that we need to pay debt first.</p>
                    <p className="modal__description"><strong>For example:</strong> emergency fund, saving for retirement, paying off debt.</p>
                    <button className='modal__btn' onClick={() => updateModalState('savings')}>Close</button>
                </div>
            </Modal>
        </>
    )
}

export default Modals