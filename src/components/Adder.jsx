function Adder() {
    return (
        <div className='adder'>
            <p className='subtitle'>Add Incomes or Expenses</p>
            <form action="">
                <label for="name">Name:</label>
                <input type="text" id='name' />
                <label for="amount">Amount:</label>
                <input type="text" id='amount' />
                <label for="category">Category:</label>
                <select name="category" id="category">
                    <option value="needs">Needs</option>
                    <option value="wants">Wants</option>
                    <option value="savings">Savings</option>
                </select>
                <button><i className="fa-solid fa-circle-plus"></i></button>
            </form>
        </div>
    )
}

export default Adder