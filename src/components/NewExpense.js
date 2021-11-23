import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{

    const saveHandler = (expenseData)=>{
        const data={
            id:0,
            ...expenseData,
            

        };

        props.onSave(data);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSave={saveHandler}/>
        </div>
    )
};

export default NewExpense;