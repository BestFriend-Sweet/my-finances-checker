import { useForm }  from 'react-hook-form'
import { useEffect, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { LanguageContext, Text } from '../components/LanguageProvider'

function Adder({ title, updateBudget, resetResults, updateModalState }) {
    const { register, handleSubmit, reset, formState, formState: { errors } } = useForm()
    const { dictionary } = useContext(LanguageContext)
    
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
                <p className='adder__title-name'><Text tid='addTitle' /></p>
                <i className="fa-solid fa-circle-info" onClick={() => updateModalState(title)}></i>
            </div>
            <form className='adder__form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name' className='adder__name-label'><Text tid='addNameInput' /></label>
                <input
                    type='text'
                    className='adder__name-input'
                    id='name'
                    placeholder={dictionary.addNameInputPlaceholder}
                    {...register('name', {
                        required: dictionary.addErrorMessage1,
                        pattern: {
                            value: /^[a-z ]+$/i,
                            message: dictionary.addErrorMessage2
                        }
                    })}
                />
                {errors.name && <p className='adder__name-error'>{errors.name.message}</p>}
                <label htmlFor='amount' className='adder__amount-label'><Text tid='addAmountInput' /></label>
                <input
                    type='text'
                    className='adder__amount-input'
                    id='amount'
                    placeholder={dictionary.addAmountInputPlaceholder}
                    {...register('amount', {
                        required: dictionary.addErrorMessage3,
                        pattern: {
                            value: /^[0-9]+$/,
                            message: dictionary.addErrorMessage4
                        },
                        min: {
                            value: 0,
                            message: dictionary.addErrorMessage5
                        },
                        max: {
                            value: 10000000,
                            message: dictionary.addErrorMessage6
                        }
                    })}
                />
                {errors.amount && <p className='adder__amount-error'>{errors.amount.message}</p>}
                <label htmlFor='category' className='adder__category-label'><Text tid='addCategorySelector' /></label>
                <select
                    className='adder__category-input'
                    id='category'
                    {...register('category', { required: true })}
                >
                    <option value='incomes'><Text tid='addCategoryValue1' /></option>
                    <option value='needs'><Text tid='addCategoryValue2' /></option>
                    <option value='wants'><Text tid='addCategoryValue3' /></option>
                    <option value='savings'><Text tid='addCategoryValue4' /></option>
                </select>
                <button className='adder__btn'><i className="fa-solid fa-circle-plus"></i></button>
            </form>
        </div>
    )
}

export default Adder