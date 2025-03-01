import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../../interfaces'

// Define a type for the slice state
interface CounterState {
    cartItems: IProduct[]
}

// Define the initial state using that type
const initialState: CounterState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { // Actions

    },
})

// export const { increaseAction } = cartSlice.actions

export default cartSlice.reducer