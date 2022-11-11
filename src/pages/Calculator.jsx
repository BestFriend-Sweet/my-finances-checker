import Modals from '../components/Modals'
import Adder from '../components/Adder'
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

    function checkFinances() {
        const { incomes, needs, wants, savings } = budget
        if (incomes.length > 0 && needs.length > 0 && wants.length > 0 && savings.length > 0) {
            setDisplayResults(true)
            checkBudget()
        }
    }

    function checkBudget() {
        const needsResult = budget.incomes.reduce((prev, curr) => prev + Number(curr.amount), 0) * 0.5 - budget.needs.reduce((prev, curr) => prev + Number(curr.amount), 0)
        const wantsResult = budget.incomes.reduce((prev, curr) => prev + Number(curr.amount), 0) * 0.3 - budget.wants.reduce((prev, curr) => prev + Number(curr.amount), 0)
        const savingsResult = budget.incomes.reduce((prev, curr) => prev + Number(curr.amount), 0) * 0.2 - budget.savings.reduce((prev, curr) => prev + Number(curr.amount), 0)

        if (needsResult >= 0 && wantsResult >= 0 && savingsResult >= 0) {
            setIsBudgetHealthy(true)
        }
    }

    function resetResults() {
        setDisplayResults(false)
        setIsBudgetHealthy(false)
    }

    function removeFromBudget(item) {
        setBudget(prev => {
            return {...prev, [item.category]: prev[item.category].filter(i => i.id !== item.id)}
        })
        resetResults()
    }

    return (
        <main className='calculator'>
            <section className='calculator__buttons'>
                <button className='calculator__btn' onClick={updateInstructionsState}>Instructions</button>
                <button className='calculator__btn' onClick={updateNeedsState}>Tips Needs</button>
                <button className='calculator__btn' onClick={updateWantsState}>Tips Wants</button>
                <button className='calculator__btn' onClick={updateSavingsState}>Tips Savings</button>
            </section>

            <aside className='calculator__right-menu'>
                <p className='calculator__link' onClick={updateInstructionsState}>Instructions</p>
                <p className='calculator__link' onClick={updateNeedsState}>Tips Needs</p>
                <p className='calculator__link' onClick={updateWantsState}>Tips Wants</p>
                <p className='calculator__link' onClick={updateSavingsState}>Tips Savings</p>
            </aside>

            <Adder updateBudget={updateBudget} resetResults={resetResults} />
            <Category title='Incomes' items={budget.incomes} removeFromBudget={removeFromBudget} />
            <Category title='Needs' incomes={budget.incomes} items={budget.needs} displayResults={displayResults} removeFromBudget={removeFromBudget} />
            <Category title='Wants' incomes={budget.incomes} items={budget.wants} displayResults={displayResults} removeFromBudget={removeFromBudget} />
            <Category title='Savings' incomes={budget.incomes} items={budget.savings} displayResults={displayResults} removeFromBudget={removeFromBudget} />

            <Message displayResults={displayResults} isBudgetHealthy={isBudgetHealthy} />

            <button className='calculator__check-btn' onClick={checkFinances}>Check My Finances!</button>

            <Modals
                isOpen={isOpen}
                updateInstructionsState={updateInstructionsState}
                updateNeedsState={updateNeedsState}
                updateWantsState={updateWantsState}
                updateSavingsState={updateSavingsState}
            />
        </main>
    )
}

export default Calculator