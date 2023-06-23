import Header from "./components/Layout/Header";
import FoodList from "./components/Meals/FoodList";
import Summary from "./components/Summary";
import './App.css';
import ItemCart from "./components/Cart/ItemCart";
import { useContext, useEffect, useState } from "react";
import CartProvider from './components/store/CartProvider'
import Loading from "./components/UI/Loading";

const App = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },3000)
    return ()=>{ clearTimeout(timer)}
  },[])

  function handleCardClick(){
    setCartOpen(true);
  }
  function handleCartClose(){
    setCartOpen(false);
  }
  return(
    <CartProvider >
    { isLoading ? <Loading/> 
      :
      <div className='app'>
        {/* {console.log('app re evaluated')} */}
        <Header onCartOpen={handleCardClick} />
        <Summary />
        <FoodList />
        {isCartOpen && <ItemCart onCartClose={handleCartClose} />}
      </div>
    }
    </CartProvider>
  )
}

export default App;