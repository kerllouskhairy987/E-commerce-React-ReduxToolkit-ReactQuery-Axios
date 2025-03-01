import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../../interfaces'
import { addItemToLocalStorage, addItemToShoppingCart } from '../../../utils/function'
import { RootState } from '../../store'

interface CounterState {
    cartItems: IProduct[]
}

const initialState: CounterState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { // Actions
        addItemsToCart: (state, actionPayload: PayloadAction<IProduct>) => {
            // state.cartItems = [...state.cartItems, actionPayload.payload]   // if you want to adding every time when you click to add to cart
            state.cartItems = addItemToShoppingCart(state.cartItems, actionPayload.payload);

            addItemToLocalStorage(actionPayload.payload);
        }
    },
})

export const { addItemsToCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart

export default cartSlice.reducer