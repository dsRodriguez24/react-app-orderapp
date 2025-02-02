import { Navigate, Route, Routes} from "react-router-dom"
import { HeaderAuth, Login, Register } from "../views"


export const RouterAuth = () => {
    
    return (
    <>
        <HeaderAuth/>
        <Routes>
            <Route path="login" element={ <Login/> }/>
            <Route path="register" element={ <Register/> }/>
            <Route path="/*" element={ <Navigate to="login"/> }/>
        </Routes>
    </>
    )
}
