import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    changed: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        setCart(state, action) {
            state.items = action.payload;
        },
        addItem(state, action) {
            state.changed = true;
            const index = state.items.findIndex(item => item.title === action.payload.title);
            if (index > -1) {
                state.items[index].quantity++;
                state.items[index].total += action.payload.price;
            } else {
                state.items.push({
                    title: action.payload.title,
                    quantity: 1,
                    total: action.payload.price,
                    price: action.payload.price,
                })
            }
        },
        removeItem(state, action) {
            state.changed = true;
            const index = state.items.findIndex(item => item.title === action.payload.title);
            if (index > -1) {
                if (state.items[index].quantity > 1) {
                    state.items[index].quantity--;
                    state.items[index].total -= action.payload.price;
                } else {
                    state.items.splice(index, 1);
                }
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;