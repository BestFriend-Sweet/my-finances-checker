import Button from '../components/Button'
import Modal from '../components/Modal'
import Adder from '../components/Adder'
import Category from '../components/Category'
import { useState } from 'react'

function Calculator() {
    const [isOpen, setIsOpen] = useState({
        instructions: false,
        needs: false,
        wants: false,
        savings: false
    })
    const [budget, setBudget] = useState(
        {
            incomes: [],
            needs: [],
            wants: [],
            savings: []
        }
    )
    
    function updateBudget(formData) {
        if (formData.category === 'incomes') {
            setBudget(prevBudget => { 
                return {...prevBudget, incomes: [...prevBudget.incomes, formData]}
            })
        } else if (formData.category === 'needs') {
            setBudget(prevBudget => {
                return { ...prevBudget, needs: [...prevBudget.needs, formData] }
            })
        } else if (formData.category === 'wants') {
            setBudget(prevBudget => {
                return { ...prevBudget, wants: [...prevBudget.wants, formData] }
            })
        } else if (formData.category === 'savings') {
            setBudget(prevBudget => {
                return { ...prevBudget, savings: [...prevBudget.savings, formData] }
            })
        }
    }

    function updateInstructionsState() {
        setIsOpen(prev => {
            return {...prev, instructions: !prev.instructions }
        })
    }

    function updateNeedsState() {
        setIsOpen(prev => {
            return {...prev, needs: !prev.needs}
        })
    }

    function updateWantsState() {
        setIsOpen(prev => {
            return {...prev, wants: !prev.wants}
        })
    }

    function updateSavingsState() {
        setIsOpen(prev => {
            return {...prev, savings: !prev.savings}
        })
    }

    return (
        <main className='calculator'>
            <section className='calculator__buttons'>
                <Button onClick={updateInstructionsState} name='Instructions' />
                <Button onClick={updateNeedsState} name='Tips Needs' />
                <Button onClick={updateWantsState} name='Tips Wants' />
                <Button onClick={updateSavingsState} name='Tips Savings' />
            </section>

            {/* <aside className='calculator__right-menu'>
                <p><a href="">Instructions</a></p>
                <p><a href="">Tips Wants</a></p>
                <p><a href="">Tips Needs</a></p>
                <p><a href="">Tips Savings</a></p>
            </aside> */}

            <Modal isOpen={isOpen.instructions} handleClose={updateInstructionsState} >
                <div className='modal-content'>
                    <p className='modal-title'>Instructions</p>
                    <ul>
                        <li>Add incomes and expenses, try to list everything, it will make the results more accurate.</li>
                        <li>If you want to change an income or expense you can delete it and then added with the correct information.</li>
                        <li>After you are done and it's looking like it has everything you earn or spend during a regular month click on Check My Finances!</li>
                    </ul>
                    <button onClick={updateInstructionsState}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.needs} handleClose={updateNeedsState} >
                <div className='modal-content'>
                    <p className='modal-title'>Tips Needs</p>
                    <p className='modal-description'>50% of your income: needs. Necessities are the expenses you can't avoid. This portion of your budget should cover required costs such as:</p>
                    <ul>
                        <li>Housing.</li>
                        <li>Food.</li>
                        <li>Transportation.</li>
                        <li>Basic utilities.</li>
                        <li>Insurance.</li>
                        <li>Minimum loan payments. Anything beyond the minimum goes into the savings and debt repayment bucket.</li>
                        <li>Child care or other expenses that need to be covered so you can work.</li>
                    </ul>
                    <button onClick={updateNeedsState}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.wants} handleClose={updateWantsState} >
                <div className='modal-content'>
                    <p className='modal-title'>Tips Wants</p>
                    <p className='modal-description'>30% of your income: wants. Distinguishing between needs and wants isn't always easy and can vary from one budget to another. Generally, though, wants are the extras that aren’t essential to living and working. They're often for fun and may include:</p>
                    <ul>
                        <li>Monthly subscriptions.</li>
                        <li>Travel.</li>
                        <li>Entertainment.</li>
                        <li>Meals out.</li>
                    </ul>
                    <button onClick={updateWantsState}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.savings} handleClose={updateSavingsState} >
                <div className='modal-content'>
                    <p className='modal-title'>Tips Savings</p>
                    <p className="modal-description">20% of your income: savings and debt. Savings is the amount you sock away to prepare for the future. Devote this chunk of your income to paying down existing debt and creating a financial cushion.</p>
                    <p className="modal-description">How, exactly, to use this part of your budget depends on your situation, but it will likely include:</p>
                    <ul>
                        <li>Starting and growing an emergency fund.</li>
                        <li>Saving for retirement through a 401(k) and perhaps an individual retirement account.</li>
                        <li>Paying off debt, beginning with high-interest accounts like credit cards.</li>
                    </ul>
                    <button onClick={updateSavingsState}>Close</button>
                </div>
            </Modal>

            <section className='calculator__categories'>
                <Adder updateBudget={updateBudget} />
                <Category title='Incomes' items={budget.incomes} />
                <Category title='Needs' items={budget.needs} />
                <Category title='Wants' items={budget.wants} />
                <Category title='Savings' items={budget.savings} />
                <button>Check My Finances!</button>
            </section>
        </main>
    )
}

export default Calculator