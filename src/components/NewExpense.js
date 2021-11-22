import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = () =>{

    const saveHandler = (expenseData)=>{
        const data={
            ...expenseData,
            id:math.random().toString

        };
        console.log(data);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSave={saveHandler}/>
        </div>
    )
};

export default NewExpense;