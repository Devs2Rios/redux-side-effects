import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const items = useSelector(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {
        items.length
          ? <ul>{items.map((item, i) => <CartItem key={`item-${i}`} item={item} />)}</ul>
          : <p className={classes.empty}>No items in your cart</p>
      }
    </Card>
  );
};

export default Cart;
