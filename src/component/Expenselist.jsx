import React from 'react'
import Expenseitem from './Expenseitem'
const Expenselist = ({onDeleteExpense,expenses}) => {
  return (
  <>
  <div className='fb'>
    {expenses.length===0 && <p className='text-black font-bold'>No Expenses Added Yet.</p>}
    </div>
    {expenses.map((expense) => (
    <Expenseitem key={expense.id} expense={expense} onDelete={onDeleteExpense}/>
    ))}
  </>
  )
}

export default Expenselist
