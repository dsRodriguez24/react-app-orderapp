import { Route, Routes} from "react-router-dom"
import { NavBar } from "../components/NavBar";
import { Dashboard } from "../views/Dashboard";
import { Products } from "../views/Products";


export const RouterOrderApp = () => {
    

    return (
    <>
        <NavBar/>
        <Routes>
            <Route path="dashboard" element={ <Dashboard/> }/>
            <Route path="productos" element={ <Products/> }/>
            
        </Routes>
    </>
    )
}
