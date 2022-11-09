import Modal from '../components/Modal'

function Modals({ isOpen, updateInstructionsState, updateNeedsState, updateWantsState, updateSavingsState }) {
    return (
        <>
            <Modal isOpen={isOpen.instructions} handleClose={updateInstructionsState} >
                <div className='modal__content'>
                    <p className='modal__title'>Instructions</p>
                    <ol className='modal__description'>
                        <li className='modal__description-item'>Add incomes and expenses, try to list everything, it will make the results more accurate.</li>
                        <li className='modal__description-item'>If you want to change an income or expense you can delete it and then added with the correct information</li>
                        <li className='modal__description-item'>After you are done and it's looking like it has everything you earn or spend during a regular month click on Check My Finances!</li>
                    </ol>
                    <button className='modal__btn' onClick={updateInstructionsState}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.needs} handleClose={updateNeedsState} >
                <div className='modal__content'>
                    <p className='modal__title'>Tips Needs</p>
                    <p className='modal__description'>50% of your income. Necessities are the expenses you can't avoid.</p>
                    <p className="modal__description"><strong>For example:</strong> housing, food, transportation, basic utilities, insurance, minimum loan payments, child care or other expenses that need to be
                        cover so you can work.</p>
                    <button className='modal__btn' onClick={updateNeedsState}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.wants} handleClose={updateWantsState} >
                <div className='modal__content'>
                    <p className='modal__title'>Tips Wants</p>
                    <p className='modal__description'>30% of your income. Distinguishing between needs and wants isn't always easy and can vary from one budget to another. Generally, though, wants are the extras that aren't essential to living and working.</p>
                    <p className="modal__description"><strong>For example:</strong> monthly subscriptions, travel, entertainment, meals out.</p>
                    <button className='modal__btn' onClick={updateWantsState}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.savings} handleClose={updateSavingsState} >
                <div className='modal__content'>
                    <p className='modal__title'>Tips Savings</p>
                    <p className="modal__description">20% of your income. Savings is the amount you sock away to prepare for the future. Devote this chunk of your income to paying down existing debt and creating a financial cushion.</p>
                    <p className="modal__description"><strong>For example: </strong>starting and growing an emergency fund, saving for retirement through a 401(k) and perhaps an individual retirement account, Paying off debt, beginning with high-interest
                        accounts like credit cards.</p>
                    <button className='modal__btn' onClick={updateSavingsState}>Close</button>
                </div>
            </Modal>
        </>
    )
}

export default Modals