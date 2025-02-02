import { createSlice } from '@reduxjs/toolkit'


export const order = createSlice({
    name: 'order',
    initialState: {
        productsSelected: [],
        searchTerm: "",
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        addProduct: (state, action: any) => {
            state.productsSelected.push(action.payload)
        },
        removeProduct: (state, action: any) => {
            state.productsSelected = state.productsSelected.filter((producto: any) => producto.product !== action.payload)
        },
        updateProduct: (state, action: any) => {
            state.productsSelected = state.productsSelected.map((product: any) => {
                if (product.product === action.payload.id) {
                  return { ...product, precio_unitario: action.payload.precio_unitario, precio_total: action.payload.precio_total, cantidad: action.payload.cantidad }; // Modificamos solo la propiedad deseada
                }
                return product; // Si no es el producto, no lo tocamos
              });
        },
        resetProduct: (state) => {
            state.productsSelected = [];
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSearchTerm , addProduct, removeProduct, updateProduct, resetProduct } = order.actions

export default order.reducer