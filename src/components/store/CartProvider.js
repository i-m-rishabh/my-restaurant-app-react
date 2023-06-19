import { useState } from "react";
import cartContext from "./cart-context"

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([
            {food:'panir dosa', desc:'cripsy dosa with shahi paneer', price:40.65, count:3},
            {food:'aam kachauri', desc:'delicious besan kachauries with tasty mango\'s soup', price:25.39, count:1},
            {food:'idli sambhar', desc:'famous north indian food', price:42.58, count:1},
          ])
    let contextValue = {
          items : cartItems,
          totalItems: cartItems.length,
          totalAmount : function (){
            let totalAmount = 0;
            this.items.map((item)=>{
              totalAmount += item.price * item.count;
            })
            return totalAmount.toFixed(2);
          },
          addItem : function (item){
    
            console.log('add item called');
            console.log(this.items);
            setCartItems((prevItems)=>{
                let flag=0;
                let newItems =  prevItems.map(cartItem=>{
                    if(cartItem.food === item.food){
                        flag=1;
                        return {
                            ...cartItem, count: cartItem.count+1
                        }
                        
                    }else{
                        return cartItem;
                    }
                })
                if(flag === 0){
                    newItems.push({...item, count:1})
                }
                return newItems;
            })
          },
          removeItem : (id)=>{
          }
    }
    return(
        <cartContext.Provider value={contextValue}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartProvider;