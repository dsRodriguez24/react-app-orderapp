import { configureStore } from '@reduxjs/toolkit'
import { main } from './slices/main.slice'

export default configureStore({
    reducer: {
        main: main.reducer
    },
})