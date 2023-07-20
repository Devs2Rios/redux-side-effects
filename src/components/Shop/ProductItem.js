import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import { uiActions } from '../../store/ui';
import { replaceCart } from '../../utils/services';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

let isInitial = true;

const ProductItem = ({ title, price, description }) => {
  const dispatch = useDispatch(),
    items = useSelector(state => state.cart.items),
    addItem = () => {
      isInitial = false;
      dispatch(cartActions.addItem({ title, price }))
    };

  useEffect(() => {
    if (!isInitial)
      (async () => {
        try {
          dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending!',
            message: 'Sending cart data!'
          }))
          await replaceCart(items);
          dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sending cart data successful!'
          }))
        } catch (err) {
          dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!'
          }))
        }
      })();
  }, [dispatch, items])

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
