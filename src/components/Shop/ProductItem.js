import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import { replaceCart } from '../../utils/services';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = ({ title, price, description }) => {
  const dispatch = useDispatch(),
    items = useSelector(state => state.cart.items),
    addItem = () => dispatch(cartActions.addItem({ title, price }));

  useEffect(() => {
    (async () => await replaceCart(items))();
  }, [items])

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
