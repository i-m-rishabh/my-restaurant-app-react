import classes from './foodList.module.css';
import FoodItem from './FoodItem.js';
const FoodList = () => {
    let data = [
        {food:'food1', desc:'food description', price:`$${45.63}`},
        {food:'food1', desc:'food description', price:`$${45.63}`},
        {food:'food1', desc:'food description', price:`$${45.63}`},
        {food:'food1', desc:'food description', price:`$${45.63}`},
        {food:'food1', desc:'food description', price:`$${45.63}`},
        {food:'food1', desc:'food description', price:`$${45.63}`},
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