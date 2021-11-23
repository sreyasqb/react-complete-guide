import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [showForm, setForm] = useState(false);

  const saveHandler = (expenseData) => {
    const data = {
      id: Math.random().toString(),
      ...expenseData,
    };
    setForm(!showForm);

    props.onSave(data);
  };
  const showFunction = () => {
    setForm(!showForm);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onSave={saveHandler} />
      ) : (
        <button onClick={showFunction}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
