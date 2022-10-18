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
            setBudget(budget.incomes.push(formData))
        } else if (formData.category === 'needs') {
            setBudget(budget.needs.push(formData))
        } else if (formData.category === 'wants') {
            setBudget(budget.wants.push(formData))
        } else if (formData.category === 'savings') {
            setBudget(budget.savings.push(formData))
        }
        console.log(budget)
    }

    const categoriesArr = ['Incomes', 'Needs', 'Wants', 'Savings']
    const categories = categoriesArr.map(el => {
        return <Category title={el} />
    })

    return (
        <main className='calculator'>
            <section className='calculator__buttons'>
                <button>Instructions</button>
                <button>Tips Wants</button>
                <button>Tips Needs</button>
                <button>Tips Savings</button>
            </section>

            <section className='calculator__categories'>
                <Adder updateBudget={updateBudget} />
                {categories}
                <button>Check My Finances!</button>
            </section>
        </main>
    )
}

export default Calculator