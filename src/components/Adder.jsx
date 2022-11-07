import { useForm }  from 'react-hook-form'
import { useEffect } from 'react'

function Adder({ updateBudget }) {
    const { register, handleSubmit, reset, formState, formState: { errors } } = useForm()
    
    function onSubmit(data) {
        console.log(data)
        updateBudget(data)
    }

    useEffect(() => {
        formState.isSubmitSuccessful && reset()
    }, [formState, reset])

    return (
        <div className='adder'>
            <p className='title'>Add Incomes or Expenses</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    placeholder='Name of amount'
                    {...register('name', {
                        required: 'A name for the amount is required.',
                        pattern: {
                            value: /^[a-z ]+$/i,
                            message: 'Please insert only letters or spaces.'
                        }
                    })}
                />
                {errors.name && <p className='name-error'>{errors.name.message}</p>}
                <label htmlFor='amount'>Amount</label>
                <input
                    type='text'
                    id='amount'
                    placeholder='Amount in $'
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
                {errors.amount && <p className='amount-error'>{errors.amount.message}</p>}
                <label htmlFor='category'>Category</label>
                <select
                    id='category'
                    {...register('category', { required: true })}
                >
                    <option value='incomes'>Incomes</option>
                    <option value='needs'>Needs</option>
                    <option value='wants'>Wants</option>
                    <option value='savings'>Savings</option>
                </select>
                <button><i className="fa-solid fa-circle-plus"></i></button>
            </form>
        </div>
    )
}

export default Adder