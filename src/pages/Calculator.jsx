import Modals from '../components/Modals'
import Adder from '../components/Adder'
import Category from '../components/Category'
import Message from '../components/Message'
import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

function Calculator() {
    const [isOpen, setIsOpen] = useState({ instructions: false, needs: false, wants: false, savings: false })
    const [budget, setBudget] = useLocalStorage('budget', { incomes: [], needs: [], wants: [], savings: [] })
    const [displayResults, setDisplayResults] = useState(false)
    const [isBudgetHealthy, setIsBudgetHealthy] = useState(false)
    const categories = ['incomes', 'needs', 'wants', 'savings']

    const listCategories = categories.map(category => {
        return <Category
                    key={category}
                    title={category}
                    budget={budget}
                    displayResults={displayResults}
                    removeFromBudget={removeFromBudget}
                    updateModalState={updateModalState}
                />
    })
    
    function updateBudget(formData) {
        setBudget(prevBudget => { 
            return {...prevBudget, [formData.category]: [...prevBudget[formData.category], formData]}
        })
    }

    function updateModalState(category) {
        setIsOpen(prev => {
            return {...prev, [category]: !prev[category]}
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
            <Adder
                title='instructions'
                updateBudget={updateBudget}
                resetResults={resetResults} 
                updateModalState={updateModalState}
            />
            {listCategories}
            <Message
                displayResults={displayResults}
                isBudgetHealthy={isBudgetHealthy}
            />
            <button className='calculator__check-btn' onClick={checkFinances}> 
             <span className="btnText">Check My Finances!</span>
             <span className="btn__anime"></span>
            </button>
            <Modals
                isOpen={isOpen}
                updateModalState={updateModalState}
            />
        </main>
    )
}

export default Calculator