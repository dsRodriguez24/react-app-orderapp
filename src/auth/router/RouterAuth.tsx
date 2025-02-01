import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { HeaderAuth, Login, Register } from "../views"
import { useSelector } from "react-redux"
import { useEffect } from "react";


export const RouterAuth = () => {
    
    const { authenticated } = useSelector( (state :any) => state.main);
    const navigate = useNavigate();


    useEffect( () => {
      if (authenticated) {
        navigate("/dashboard");
      }
    }, [authenticated])
    

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
