import {useState} from 'react';
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";


const dummyExpnses=[
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },

]

function App() {

  

  const [expenses,setExpenses] =useState(dummyExpnses);

  const saveHandler =(expenseData)=>{
    console.log(expenseData);
    
    setExpenses( (prevExpenses)=>{
      console.log([expenseData,...prevExpenses]);
      return [expenseData,...prevExpenses];
    }
      
    );
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onSave={saveHandler}/>
      
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
