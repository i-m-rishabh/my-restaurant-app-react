import classes from './foodList.module.css';
import FoodItem from './FoodItem.js';
const FoodList = () => {
    let data = [
        {food:'panir dosa', desc:'food description', price:45.63},
        {food:'aam kachauri', desc:'food description', price:45.63},
        {food:'idli sambhar', desc:'food description', price:45.6},
        {food:'food1', desc:'food description', price:45.63},
        {food:'food2', desc:'food description', price:45.63},
        {food:'food3', desc:'food description', price:45.63},
    ]
    return(
        <div className={classes.foodList}>
            <ul>
            {
                data.map((item)=>{
                    return (
                        <FoodItem item={item} />
                    )
                })
            }
            </ul>
        </div>
    )
}
export default FoodList;