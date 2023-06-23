import { useEffect, useState } from "react";
import cartContext from "./cart-context"

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
    useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(cartItems));
    },[cartItems]);
    // const [cartItems, setCartItems] = useState([
    //     { food: 'panir dosa', desc: 'cripsy dosa with shahi paneer', price: 40.65, count: 3 },
    //     { food: 'aam kachauri', desc: 'delicious besan kachauries with tasty mango\'s soup', price: 25.39, count: 1 },
    //     { food: 'idli sambhar', desc: 'famous north indian food', price: 42.58, count: 1 },
    // ])
    let contextValue = {
        items: cartItems,
        totalItems: cartItems.length,
        totalAmount: function () {
            let totalAmount = 0;
            this.items.map((item) => {
                if (item) {
                    totalAmount += item.price * item.count;
                }
            })
            return totalAmount.toFixed(2);
        },
        addItem: function (item, amount) {

            // console.log('add item called');
            // console.log(this.items);
            setCartItems((prevItems) => {
                let flag = 0;
                let newItems = prevItems.map(cartItem => {
                    if (cartItem.food === item.food) {
                        flag = 1;
                        return {
                            ...cartItem, count: cartItem.count + amount ,
                        }

                    } else {
                        return cartItem;
                    }
                })
                if (flag === 0) {
                    newItems.push({ ...item, count: amount })
                }
                return newItems;
            })
        },
        removeItem: (item) => {
            setCartItems((prevItems)=>{
            return  prevItems.map((cartItem)=>{
                if(cartItem.food === item.food){
                    if(cartItem.count>=1){
                        return {...cartItem, count: cartItem.count-1}
                    }else{
                        return cartItem;
                    }
                }else{
                    return cartItem;
                }
              })
            })
            setCartItems((prevItems)=>{
            return prevItems.filter((cartItem)=>{
                return cartItem.count>0;
            })
        })
        }
        
    }
    return (
        <cartContext.Provider value={contextValue}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartProvider;