import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = () => {
  const cartItems = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
