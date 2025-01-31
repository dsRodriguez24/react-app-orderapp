import { createSlice } from '@reduxjs/toolkit'

export const main = createSlice({
    name: 'counter',
    initialState: {
        authenticated: false,
        token: null,
        rol: null,
        nombre: null,
    },
    reducers: {
        login: (state, action) => {
            state.authenticated = true;
            state.token         = action.payload.jwt;
            state.rol           = action.payload.rol;
            state.nombre        = action.payload.nombre;
        },
        logout: (state) => {
            state.authenticated = false;
            state.token         = null;
            state.rol           = null;
            state.nombre        = null;
        },
    },
})

// Action creators are generated for each case reducer function
export const { login } = main.actions

export default main.reducer