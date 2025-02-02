import { createSlice } from '@reduxjs/toolkit'

export const order = createSlice({
    name: 'order',
    initialState: {
        productsSelected:[]
    },
    reducers: {
        modalShow: (state, action) => {
            state.productsSelected = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { modalShow } = order.actions

export default order.reducer