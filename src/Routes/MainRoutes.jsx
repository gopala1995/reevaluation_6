
import { Route,Routes } from "react-router-dom"
import { About } from "../components/About"
import { Home } from "../components/Home"
import {Products} from "../components/ProductsDashboard"

export const MainRoutes = ()=>{
    return(
        <>
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/products" element={<Products/>}/>
         </Routes>
        </>
    )
}