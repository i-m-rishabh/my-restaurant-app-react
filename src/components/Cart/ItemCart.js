import { createPortal } from 'react-dom';
import classes from './itemCart.module.css'
import { useContext } from 'react';
import cartContext from '../store/cart-context';
import CartItem from './CartItem.js';

const ItemCart = (props) => {
   const myCart = useContext(cartContext);
    let  cartModal = <div className={classes.itemCart}>
                         <div className={classes.modal}>
                             <div className={classes.itemList}>
                                {
                                 myCart.items.map((item)=>{
                                    return(
                                       <CartItem item={item} key={item.food}/>
                                    ) 
                                    
                                 })
                                }
                             </div>
                             <div className={classes.billing}>
                                <h2>Total Amount</h2>
                                <h2>${myCart.totalAmount()}</h2>
                             </div>
                             <div className={classes.buttonGroup}>
                                <button className={classes.button} onClick={()=>{props.onCartClose()}}>close</button>
                                <button className={classes.button} onClick={()=>{console.log('thanks for ordering.')}}>order</button>
                             </div>
                        </div>
                     </div>
    return(
            createPortal(cartModal, document.body)
    )
}
export default ItemCart;