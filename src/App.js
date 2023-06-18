import Header from "./components/Layout/Header";
import FoodList from "./components/Meals/FoodList";
import Summary from "./components/Summary";
import './App.css';
import ItemCart from "./components/Cart/ItemCart";
const App = () => {
  return(
    <div className='app'>
      <Header />
      <Summary />
      <FoodList />
      <ItemCart />
    </div>
  )
}

export default App;