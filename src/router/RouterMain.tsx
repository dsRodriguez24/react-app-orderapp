import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"
import { RouterAuth } from "../auth/router/RouterAuth";
import { RouterOrderApp } from "../orderapp/router/RouterOrderApp";

export const RouterMain = () => {
    const { authenticated } = useSelector( (state: any) =>  state.main  );


  return (
    <>
        <Routes>
            {
                ( authenticated ) 
                ? <Route path="/*" element={ <RouterOrderApp/> } /> 
                : <Route path="/auth/*" element={ <RouterAuth/> }/> 
            }

            <Route path="/*" element={ <Navigate to="/auth/login"/> } /> 

        </Routes>
    </>
  )
}
