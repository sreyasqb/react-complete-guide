import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
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
      <ExpensesFilter selected={filterYear} onSave={dateHandler} />
      {console.log(props.items)};
      {filteredExpenses.map((item) => 
        <ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} />
      )}
    
    </Card>
  );
}

export default Expenses;
