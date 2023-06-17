import classes from './form.module.css';

const Form = () => {
    return(
        <div className={classes.form}>
            <div className={classes.amount}>
            <label htmlFor="amount">Amount </label>
            <input type="number" name="amount" id="amount" />
            </div>
            <div className={classes.button}>
            <button type="submit">+Add</button>
            </div>
        </div>
    )
}

export default Form;