import classes from './summary.module.css';
const Summary = () => {
    return(
        <div className={classes.summary}>
            <div className={classes.card}>
                <div className={classes.heading}>
                    <h1>Delicious Food, Delivered To You</h1>
                </div>
                <div className={classes.content}>
                    <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                    <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
                </div>
            </div>
        </div>
    )
}

export default Summary;