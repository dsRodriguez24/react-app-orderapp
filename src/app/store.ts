import { configureStore } from '@reduxjs/toolkit'
import mainReducer  from './slices/main.slice'
import productoReducer  from './slices/product.slice'
import orderReducer  from './slices/order.slice'

export default configureStore({
    reducer: {
        main: mainReducer,
        producto: productoReducer,
        orden: orderReducer
    },
})