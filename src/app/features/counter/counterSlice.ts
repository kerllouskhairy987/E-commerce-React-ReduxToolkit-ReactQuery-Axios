import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: { // Actions
        increaseAction: (state, actionPayload: PayloadAction<number>) => {
            state.value += actionPayload.payload
        }
    },
})

export const { increaseAction } = counterSlice.actions

export default counterSlice.reducer