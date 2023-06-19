import { useContext } from 'react';
import classes from './form.module.css';
import cartContext from '../store/cart-context';

const Form = (props) => {
    const myCtx = useContext(cartContext);
    function handleClick(){
        // console.log('added to cart');
        myCtx.addItem(props.item);
    }
    return(
        <div className={classes.form}>
            <div className={classes.amount}>
            <label htmlFor="amount">Amount </label>
            <input type="number" name="amount" id="amount" />
            </div>
            <div className={classes.button}>
            <button type="submit" onClick={handleClick}>+Add</button>
            </div>
        </div>
    )
}

export default Form;