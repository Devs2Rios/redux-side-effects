import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';



const CartButton = () => {
  const cartItems = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0)),
    dispatch = useDispatch(),
    handleViewCart = () => dispatch(uiActions.toggle());

  return (
    <button className={classes.button} onClick={handleViewCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
