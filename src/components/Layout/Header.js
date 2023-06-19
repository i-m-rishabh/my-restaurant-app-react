import classes from './header.module.css';
import Cart from '../Cart/Cart.js';
const Header = (props) => {
    // console.log('header evaluated');
    return(
        <div className={classes.header}>
            <div className={classes.nav}>
                <div className={classes.logo}>ReactMeal</div>
                <Cart onCartOpen={props.onCartOpen} onCartClose={props.onCartClose}/>
            </div>
        </div>
    )
}

export default Header;