import Header from "./components/Layout/Header";
import FoodList from "./components/Meals/FoodList";
import Summary from "./components/Summary";
import './App.css';
import ItemCart from "./components/Cart/ItemCart";
import { useState } from "react";
const App = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  function handleCardClick(){
    setCartOpen(true);
  }
  function handleCartClose(){
    setCartOpen(false);
  }
  return(
    <div className='app'>
      <Header onCartOpen={handleCardClick} />
      <Summary />
      <FoodList />
      {isCartOpen && <ItemCart onCartClose={handleCartClose} />}
    </div>
  )
}

export default App;