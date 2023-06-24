import classes from './foodList.module.css';
import FoodItem from './FoodItem.js';
const FoodList = () => {
    let data = [
        {food:'Butter Chicken', desc:'A popular North Indian dish made with tender chicken cooked in a creamy tomato-based sauce, flavored with various spices and finished with a touch of butter', price:15.00},
        {food:'Biryani', desc:'A flavorful rice dish made with aromatic basmati rice, meat (such as chicken, mutton, or shrimp), and a blend of spices. it is often garnished with fried onions, cashews, and raisins. ', price:16.00},
        {food:'Chole Bhature', desc:'A popular Punjabi dish consisting of spicy chickpea curry (chole) served with deep-fried bread (bhature). It is often accompanied by pickles and yogurt.', price:10.00},
        {food:'Masala Dosa', desc:'A South Indian specialty, it is a crispy fermented rice and lentil crepe filled with a spiced potato filling, It is typically served with coconut chutney and sambhar (a lentil soup)', price:8.00},
        {food:'Malai Kofta', desc:'A vegetarian dish made with deep-fried dumplings (koftas) made of mashed potatoes, paneer (Indian cottage cheese), and various spices, served in a creamy tomato-based gravy.', price:16.00},
        // {food:'food3', desc:'food description', price:45.63},
    ]
    return(
        <div className={classes.foodList}>
            <ul>
            {
                data.map((item)=>{
                    return (
                        <FoodItem item={item} key={item.food}/>
                    )
                })
            }
            </ul>
        </div>
    )
}
export default FoodList;