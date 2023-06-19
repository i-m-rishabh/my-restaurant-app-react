import classes from './cart.module.css';
import myImage from '../../images/cart_logo.png';
const Cart = (props) => {
    return(
        <div className={classes.cart} onClick={()=>{props.onCartOpen()}}>
            <div className={classes.logo}>
                <img src={myImage} alt="" />
            </div>
            <div className={classes.text}>Your Cart</div>
            <div className={classes.counter}>0</div>
        </div>
    )
}

export default Cart;