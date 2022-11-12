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
            <Category 
                title='incomes' 
                items={budget.incomes} 
                removeFromBudget={removeFromBudget} 
                updateModalState={updateModalState}
            />
            <Category 
                title='needs' 
                incomes={budget.incomes} 
                items={budget.needs} 
                displayResults={displayResults} 
                removeFromBudget={removeFromBudget} 
                updateModalState={updateModalState}
            />
            <Category 
                title='wants' 
                incomes={budget.incomes} 
                items={budget.wants} 
                displayResults={displayResults} 
                removeFromBudget={removeFromBudget} 
                updateModalState={updateModalState}
            />
            <Category 
                title='savings' 
                incomes={budget.incomes} 
                items={budget.savings} 
                displayResults={displayResults} 
                removeFromBudget={removeFromBudget} 
                updateModalState={updateModalState}
            />
            <Message
                displayResults={displayResults}
                isBudgetHealthy={isBudgetHealthy}
            />
            <button className='calculator__check-btn' onClick={checkFinances}>Check My Finances!</button>
            <Modals
                isOpen={isOpen}
                updateModalState={updateModalState}
            />
        </main>
    )
}

export default Calculator