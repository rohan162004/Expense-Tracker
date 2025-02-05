import { useState } from 'react'
import './App.css'
import Expenseform from './component/Expenseform'
import Expenselist from './component/Expenselist';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((exp) => exp.id !== id));
  };


  return (

    <>
      <Expenseform  onAddExpense={addExpense} />
      <Expenselist expenses = {expenses} onDeleteExpense={deleteExpense}/>
     
    </>
  )
}

export default App
