import { createSlice } from '@reduxjs/toolkit'

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("authState");
        return serializedState ? JSON.parse(serializedState) : null;
    } catch (err) {
        return null;
    }
};

export const main = createSlice({
    name: 'main',
    initialState: {
        authenticated:  loadState() ? loadState().authenticated : false,
        token:  loadState() ? loadState().token :  null,
        rol:  loadState() ? loadState().rol :  null,
        nombre:  loadState() ? loadState().nombre :  null,
    },
    reducers: {
        login: (state, action) => {
            state.authenticated = true,
            state.token         = action.payload.token,
            state.rol           = action.payload.rol.id,
            state.nombre        = action.payload.nombre
            localStorage.setItem("authState", JSON.stringify(state));

        },
        logout: (state) => {
            state.authenticated = false,
            state.token         = null,
            state.rol           = null,
            state.nombre        = null
            localStorage.removeItem("authState");

        },
    },
})

// Action creators are generated for each case reducer function
export const { login } = main.actions

export default main.reducer