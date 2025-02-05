import React from 'react'

const Expenseitem = ({expense,onDelete}) => {
    const {id,description,amount,date} = expense;
  return (
    <>
    <div className='fb'>
     <p className='text-black font-bold'>
     {description} -&#8377;{amount} - {date.toDateString()}
    </p>  
    </div>
     <button className='mt-5' onClick={()=>onDelete(id)}>Delete</button>
     </>
  )
}

export default Expenseitem
