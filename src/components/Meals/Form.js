import { useContext, useState } from 'react';
import classes from './form.module.css';
import cartContext from '../store/cart-context';
import '../Utility/utility.css';
import React from 'react';
import { createPortal } from 'react-dom';

const Form = (props) => {
    const [amount, setAmount] = useState(1);
    const myCtx = useContext(cartContext);
    function handleClick(){
        // console.log('added to cart');
        myCtx.addItem(props.item, amount);
        setAmount(1);
        console.log("item added to cart");
    }
    function handleAmountChange(event){
        // console.log(event.target.value);
        setAmount(parseInt(event.target.value));
    }
    return(
        <div className={classes.form}>
            <div className={classes.amount}>
            <label htmlFor="amount">Amount </label>
            <input type="number" name="amount" id="amount"  min={1} value={amount} onChange={handleAmountChange}/>
            </div>
            <div className={classes.button}>
            <button type="submit" onClick={handleClick} className={classes.button}>+Add</button>
            </div>
            {/* {createPortal(<div className={classes.message}>item added to cart</div>,document.body)} */}
        </div>
    )
}

export default Form;