import { useContext } from 'react';
import classes from './cartItem.module.css';
import cartContext from '../store/cart-context';
const CartItem = ({item}) => {
    const MyCtx = useContext(cartContext);
    function addItem(){
        MyCtx.addItem(item, 1);
    }
    function removeItem(){
        MyCtx.removeItem(item);
    }
    return(
        <div className={classes.cartItem}>
            <div className={classes.itemDesc}>
                <h3>{item.food}</h3>
                <p>${item.price}</p>
            </div>
            <div className={classes.itemCount}>
                x{item.count}
            </div>
            <div className={classes.itemButtons}>
                <button className={classes.itemButton} onClick={addItem}>+</button>
                <button className={classes.itemButton} onClick={removeItem}>-</button>
            </div>

        </div>
    )
}
export default CartItem;