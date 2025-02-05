import React, { useState } from 'react'
import '../style.css'
import { v4 as uuidv4 } from 'uuid'


const Expenseform = ({onAddExpense}) => {
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState()
  const [date, setDate] = useState()

  const handleSubmit = (e) => {
  console.log("description, amount, date", description, amount, date); 
    e.preventDefault();
    if (!description || !amount || !date) {
      alert("Please fill all the fields");
      return;
    }
    const newExpense = {
      id: uuidv4(),
      description,
      amount: (amount),
      date: new Date(date)
    }
    btn_reset();
    console.log(newExpense);
    onAddExpense(newExpense);
    setDescription('');
    setAmount('');
    setDate('');

  }
  function btn_reset() {
    setDescription('');
    setAmount('');
    setDate('');
  }
  return (
    <>
      <form
        className="fb p-6 rounded-lg shadow-md max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-black font-medium mb-2" htmlFor="description">
            Description
          </label>
          <input
            id="description"
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black font-medium mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black font-medium mb-2" htmlFor="date">
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Expense
        </button>
      </form>
    </>
  )
}

export default Expenseform
