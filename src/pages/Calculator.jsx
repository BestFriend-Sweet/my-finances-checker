import Modal from '../components/Modal'
import Adder from '../components/Adder'
import Incomes from '../components/Incomes'
import Category from '../components/Category'
import Message from '../components/Message'
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
    const [displayResults, setDisplayResults] = useState(false)
    const [isBudgetHealthy, setIsBudgetHealthy] = useState(false)
    
    function checkFinances() {
        setDisplayResults(true)
        checkBudget()
    }

    function checkBudget() {
        const needsResult = budget.incomes.reduce((prev, curr) => prev + Number(curr.amount), 0) * 0.5 - budget.needs.reduce((prev, curr) => prev + Number(curr.amount), 0)
        const wantsResult = budget.incomes.reduce((prev, curr) => prev + Number(curr.amount), 0) * 0.3 - budget.wants.reduce((prev, curr) => prev + Number(curr.amount), 0)
        const savingsResult = budget.incomes.reduce((prev, curr) => prev + Number(curr.amount), 0) * 0.2 - budget.savings.reduce((prev, curr) => prev + Number(curr.amount), 0)

        if (needsResult >= 0 && wantsResult >= 0 && savingsResult >= 0) {
            setIsBudgetHealthy(true)
        }
    }
    
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
                <button onClick={updateInstructionsState}>Instructions</button>
                <button onClick={updateNeedsState}>Tips Needs</button>
                <button onClick={updateWantsState}>Tips Wants</button>
                <button onClick={updateSavingsState}>Tips Savings</button>
            </section>

            <aside className='calculator__right-menu'>
                <p onClick={updateInstructionsState}>Instructions</p>
                <p onClick={updateNeedsState}>Tips Needs</p>
                <p onClick={updateWantsState}>Tips Wants</p>
                <p onClick={updateSavingsState}>Tips Savings</p>
            </aside>

            <Adder updateBudget={updateBudget} />
            <Incomes items={budget.incomes} />
            <Category title='Needs' incomes={budget.incomes} items={budget.needs} displayResults={displayResults} />
            <Category title='Wants' incomes={budget.incomes} items={budget.wants} displayResults={displayResults} />
            <Category title='Savings' incomes={budget.incomes} items={budget.savings} displayResults={displayResults} />

            <Message displayResults={displayResults} isBudgetHealthy={isBudgetHealthy} />

            <button onClick={checkFinances}>Check My Finances!</button>

            <Modal isOpen={isOpen.instructions} handleClose={updateInstructionsState} >
                <div className='modal-content'>
                    <p className='modal-title'>Instructions</p>
                    <ol className='modal-description'>
                        <li>Add incomes and expenses, try to list everything, it will make the results more accurate.</li>
                        <li>If you want to change an income or expense you can delete it and then added with the correct information</li>
                        <li>After you are done and it's looking like it has everything you earn or spend during a regular month click on Check My Finances!</li>
                    </ol>
                    <button onClick={updateInstructionsState}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.needs} handleClose={updateNeedsState} >
                <div className='modal-content'>
                    <p className='modal-title'>Tips Needs</p>
                    <p className='modal-description'>50% of your income. Necessities are the expenses you can't avoid.</p>
                    <p className="modal-description"><strong>For example:</strong> housing, food, transportation, basic utilities, insurance, minimum loan payments, child care or other expenses that need to be
                        cover so you can work.</p>
                    <button onClick={updateNeedsState}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.wants} handleClose={updateWantsState} >
                <div className='modal-content'>
                    <p className='modal-title'>Tips Wants</p>
                    <p className='modal-description'>30% of your income. Distinguishing between needs and wants isn't always easy and can vary from one budget to another. Generally, though, wants are the extras that aren't essential to living and working.</p>
                    <p className="modal-description"><strong>For example:</strong> monthly subscriptions, travel, entertainment, meals out.</p>
                    <button onClick={updateWantsState}>Close</button>
                </div>
            </Modal>
            <Modal isOpen={isOpen.savings} handleClose={updateSavingsState} >
                <div className='modal-content'>
                    <p className='modal-title'>Tips Savings</p>
                    <p className="modal-description">20% of your income. Savings is the amount you sock away to prepare for the future. Devote this chunk of your income to paying down existing debt and creating a financial cushion.</p>
                    <p className="modal-description"><strong>For example: </strong>starting and growing an emergency fund, saving for retirement through a 401(k) and perhaps an individual retirement account, Paying off debt, beginning with high-interest
                        accounts like credit cards.</p>
                    <button onClick={updateSavingsState}>Close</button>
                </div>
            </Modal>
        </main>
    )
}

export default Calculator