import Header from "./components/Layout/Header";
import FoodList from "./components/Meals/FoodList";
import Summary from "./components/Summary";
import './App.css';
import ItemCart from "./components/Cart/ItemCart";
import { useContext, useState } from "react";
import CartProvider from './components/store/CartProvider'
const App = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  function handleCardClick(){
    setCartOpen(true);
  }
  function handleCartClose(){
    setCartOpen(false);
  }
  return(
    <CartProvider >
      <div className='app'>
        {console.log('app re evaluated')}
        <Header onCartOpen={handleCardClick} />
        <Summary />
        <FoodList />
        {isCartOpen && <ItemCart onCartClose={handleCartClose} />}
      </div>
    </CartProvider>
  )
}

export default App;