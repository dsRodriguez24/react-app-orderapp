import { useSelector } from "react-redux";
import {  Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { RouterAuth } from "../auth/router/RouterAuth";
import { RouterOrderApp } from "../orderapp/router/RouterOrderApp";
import { useEffect } from "react";

export const RouterMain = () => {
    const { authenticated } = useSelector( (state: any) =>  state.main  );
    const navigate = useNavigate();

    useEffect( () => {
      
        if (authenticated) {
          navigate("/app/productos");
        }else{
          navigate("/auth/login");
        }
          

    }, [ authenticated ] )


  return (
    <>
        <Routes>
            {
                ( authenticated ) 
                ? <Route path="/app/*" element={ <RouterOrderApp/> } /> 
                : <Route path="/auth/*" element={ <RouterAuth/> }/> 
            }

            <Route path="/*" element={ <Navigate to="/auth/login"/> } /> 

        </Routes>
    </>
  )
}
