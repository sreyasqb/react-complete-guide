import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const dateHandler = (data) => {
    setFilterYear(data);
  };

  const filteredExpenses=props.items.filter( item => {
    return item.date.getFullYear().toString() === filterYear;
  })


  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesFilter selected={filterYear} onSave={dateHandler} />
      
      {filteredExpenses.map((item) => 
        <ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} />
      )}
    
    </Card>
  );
}

export default Expenses;
