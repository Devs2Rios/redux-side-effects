import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartData, sendCartData } from './store/cart-actions';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch(),
    changed = useSelector(state => state.cart.changed),
    items = useSelector(state => state.cart.items),
    showCart = useSelector(state => state.ui.showCart),
    notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (changed) dispatch(sendCartData(items));
  }, [changed, dispatch, items]);

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
