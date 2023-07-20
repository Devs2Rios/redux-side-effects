import { uiActions } from "./ui";
import { replaceCart } from '../utils/services';

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