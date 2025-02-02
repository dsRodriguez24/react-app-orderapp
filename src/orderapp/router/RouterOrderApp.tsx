import { Navigate, Route, Routes} from "react-router-dom"
import { NavBar } from "../components/product-components/NavBar";
import { Dashboard } from "../views/Dashboard";
import { Products } from "../views/Products";
import { Orders } from "../views/Orders";


export const RouterOrderApp = () => {
    
    

    return (
    <>
        <NavBar/>
        <Routes>
            {/* <Route path="dashboard" element={ <Dashboard/> }/> */}
            <Route path="productos" element={ <Products/> }/>
            <Route path="ordenes" element={ <Orders/> }/>
            <Route path="/*" element={ <Navigate to="productos"/> }/>
            
        </Routes>
    </>
    )
}
