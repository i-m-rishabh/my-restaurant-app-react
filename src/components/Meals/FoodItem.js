import Form from './Form';
import classes from './foodItem.module.css';
const FoodItem = ({item}) => {
    console.log(item.food,item.desc,item.price)
    return(
        <div className={classes.foodItem}>
            <li>
                <div>
                <div className={classes.title}>
                    {item.food}
                </div>
                <div className={classes.desc}>
                    {item.desc}
                </div>
                <div className={classes.price}>
                    {item.price}
                </div>
                </div>
                <div>
                    <Form />
                </div>
            </li>
        </div>
    )
}
export default FoodItem;