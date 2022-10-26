function Modals() {
    return (
        <>
            <dialog id='modal-instructions'>
                <p>Instructions</p>
                <ul>
                    <li>Add incomes and expenses, try to list everything, it will make the results more accurate.</li>
                    <li>If you want to change an income or expense you can delete it and then added with the correct information.</li>
                    <li>After you are done and it's looking like it has everything you earn or spend during a regular month click on Check My Finances!</li>
                </ul>
                <button value='cancel'>Close</button>
            </dialog>
            <dialog id='modal-needs'>
                <p>Tips Needs</p>
                <p>50% of your income: needs. Necessities are the expenses you can't avoid. This portion of your budget should cover required costs such as:</p>
                <ul>
                    <li>Housing.</li>
                    <li>Food.</li>
                    <li>Transportation.</li>
                    <li>Basic utilities.</li>
                    <li>Insurance.</li>
                    <li>Minimum loan payments. Anything beyond the minimum goes into the savings and debt repayment bucket.</li>
                    <li>Child care or other expenses that need to be covered so you can work.</li>
                </ul>
            </dialog>
            <dialog id='modal-wants'>
                <p>Tips Wants</p>
                <p>30% of your income: wants. Distinguishing between needs and wants isn't always easy and can vary from one budget to another. Generally, though, wants are the extras that aren’t essential to living and working. They're often for fun and may include:</p>
                <ul>
                    <li>Monthly subscriptions.</li>
                    <li>Travel.</li>
                    <li>Entertainment.</li>
                    <li>Meals out.</li>
                </ul>
            </dialog>
            <dialog id='modal-savings'>
                <p>Tips Savings</p>
                <p>20% of your income: savings and debt. Savings is the amount you sock away to prepare for the future. Devote this chunk of your income to paying down existing debt and creating a financial cushion.</p>
                <p>How, exactly, to use this part of your budget depends on your situation, but it will likely include:</p>
                <ul>
                    <li>Starting and growing an emergency fund.</li>
                    <li>Saving for retirement through a 401(k) and perhaps an individual retirement account.</li>
                    <li>Paying off debt, beginning with high-interest accounts like credit cards.</li>
                </ul>
            </dialog>
        </>
    )
}

export default Modals