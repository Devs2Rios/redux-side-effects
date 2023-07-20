import { cartActions } from "./cart";
import { uiActions } from "./ui";
import { getCart, replaceCart } from '../utils/services';

export const fetchCartData = () => {
    return async (dispatch) => {
        try {
            const data = await getCart();
            dispatch(cartActions.setCart(data ? data.items : []));
        } catch (err) {
            dispatch(cartActions.setCart([]));
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            }))
        }
    }
}

export const sendCartData = (items) => {
    return async (dispatch) => {
        try {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending!',
                message: 'Sending cart data!'
            }));
            await replaceCart(items);
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sending cart data successful!'
            }));
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }
    };
}