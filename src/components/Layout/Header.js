import classes from './header.module.css';
import Cart from '../Cart/Cart.js';
const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.nav}>
                <div className={classes.logo}>ReactMeal</div>
                <Cart />
            </div>
        </div>
    )
}

export default Header;