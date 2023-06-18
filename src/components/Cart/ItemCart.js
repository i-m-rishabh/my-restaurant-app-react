import { createPortal } from 'react-dom';
import classes from './itemCart.module.css'

const ItemCart = () => {
    let  cartModal = <div className={classes.itemCart}>
                         <div className={classes.modal}>
                             <div className={classes.itemList}>
                                masala dosa
                             </div>
                             <div className={classes.billing}>
                                <h2>Total Amount</h2>
                                <h2>$38.5</h2>
                             </div>
                             <div className={classes.buttonGroup}>
                                <button className={classes.button}>close</button>
                                <button className={classes.button}>order</button>
                             </div>
                        </div>
                     </div>
    return(
            createPortal(cartModal, document.body)
    )
}
export default ItemCart;