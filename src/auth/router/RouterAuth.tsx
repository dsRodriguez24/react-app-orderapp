import { Route, Routes } from "react-router-dom"
import { HeaderAuth, Login, Register } from "../views"
// import { useSelector } from "react-redux"


export const RouterAuth = () => {
    
    // const { authenticated } = useSelector( (state :any) => state.main)


    return (
    <>
        <HeaderAuth/>
        <Routes>
            <Route path="login" element={ <Login/> }/>
            <Route path="register" element={ <Register/> }/>
        </Routes>
    </>
    )
}
