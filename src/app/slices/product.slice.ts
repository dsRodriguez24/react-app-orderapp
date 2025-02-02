import { createSlice } from '@reduxjs/toolkit'

export const product = createSlice({
    name: 'product',
    initialState: {
        modalOpen: false,
        offCanvasIsOpen: false,
        idDetailProduct: null,
        productList:[]
    },
    reducers: {
        modalShow: (state, action) => {
            state.modalOpen = action.payload
        },
        offcanvasShow: (state, action) => {
            state.offCanvasIsOpen = action.payload.isOpen,
            state.idDetailProduct = action.payload.idProduct
        },
        setProductList: (state, action) => {
            state.productList = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { modalShow, offcanvasShow, setProductList } = product.actions

export default product.reducer