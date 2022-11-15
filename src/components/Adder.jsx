import { useForm }  from 'react-hook-form'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Adder({ title, updateBudget, resetResults, updateModalState }) {
    const { register, handleSubmit, reset, formState, formState: { errors } } = useForm()
    
    function onSubmit(data) {
        data.id = uuidv4()
        updateBudget(data)
        resetResults()
    }

    useEffect(() => {
        formState.isSubmitSuccessful && reset()
    }, [formState, reset])

    return (
        <div className='adder'>
            <div className='adder__title'>
                <p className='adder__title-name'>Add Incomes or Expenses</p>
                <i className="fa-solid fa-circle-info" onClick={() => updateModalState(title)}></i>
            </div>
            <form className='adder__form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name' className='adder__name-label'>Name</label>
                <input
                    type='text'
                    className='adder__name-input'
                    id='name'
                    placeholder='Housing'
                    {...register('name', {
                        required: 'A name for the amount is required.',
                        pattern: {
                            value: /^[a-z ]+$/i,
                            message: 'Please insert only letters or spaces.'
                        }
                    })}
                />
                {errors.name && <p className='adder__name-error'>{errors.name.message}</p>}
                <label htmlFor='amount' className='adder__amount-label'>Amount</label>
                <input
                    type='text'
                    className='adder__amount-input'
                    id='amount'
                    placeholder='$1500'
                    {...register('amount', {
                        required: 'An amount is required.',
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Please insert only numbers.'
                        },
                        min: {
                            value: 0,
                            message: 'Please insert amounts greater than 0.'
                        },
                        max: {
                            value: 10000000,
                            message: 'Please insert amounts less than 10 000 000.'
                        }
                    })}
                />
                {errors.amount && <p className='adder__amount-error'>{errors.amount.message}</p>}
                <label htmlFor='category' className='adder__category-label'>Category</label>
                <select
                    className='adder__category-input'
                    id='category'
                    {...register('category', { required: true })}
                >
                    <option value='incomes'>Incomes</option>
                    <option value='needs'>Needs</option>
                    <option value='wants'>Wants</option>
                    <option value='savings'>Savings</option>
                </select>
                <button className='adder__btn'><i className="fa-solid fa-circle-plus"></i></button>
            </form>
        </div>
    )
}

export default Adder