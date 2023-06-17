import Header from "./components/Layout/Header";
import FoodList from "./components/Meals/FoodList";
import Summary from "./components/Summary";
import './App.css';
const App = () => {
  return(
    <div className='app'>
      <Header />
      <Summary />
      <FoodList />
    </div>
  )
}

export default App;