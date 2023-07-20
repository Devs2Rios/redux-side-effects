import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';

const CartButton = () => {
  const cart = useSelector(state => state.cart.items),
    dispatch = useDispatch(),
    handleViewCart = () => dispatch(uiActions.toggle());

  return (
    <button className={classes.button} onClick={handleViewCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
    </button>
  );
};

export default CartButton;
