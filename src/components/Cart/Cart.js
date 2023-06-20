import classes from './cart.module.css';
import myImage from '../../images/cart_logo.png';
import { useContext } from 'react';
import cartContext from '../store/cart-context';

const Cart = (props) => {
    const myCart = useContext(cartContext);
    // console.log('cart evaluated');
    return(
        <div className={classes.cart} onClick={()=>{props.onCartOpen()}}>
            <div className={classes.logo}>
                <img src={myImage} alt="" />
            </div>
            <div className={classes.text}>Your Cart</div>
            <div className={classes.counter}>{myCart.totalItems}</div>
        </div>
    )
}

export default Cart;