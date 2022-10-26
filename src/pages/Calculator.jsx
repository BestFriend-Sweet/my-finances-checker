import Button from '../components/Button'
import Modals from '../components/Modals'
import Adder from '../components/Adder'
import Category from '../components/Category'
import { useState } from 'react'

function Calculator() {
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

    return (
        <main className='calculator'>
            <section className='calculator__buttons'>
                <Button name='Instructions' />
                <Button name='Tips Wants' />
                <Button name='Tips Needs' />
                <Button name='Tips Savings' />
            </section>

            <Modals />

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