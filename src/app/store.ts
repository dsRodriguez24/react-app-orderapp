import { configureStore } from '@reduxjs/toolkit'
import mainReducer  from './slices/main.slice'

export default configureStore({
    reducer: {
        main: mainReducer
    },
})