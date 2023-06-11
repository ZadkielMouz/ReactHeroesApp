import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth"



export const PublicRoute = () => {
    const {state} = useContext(AuthContext);
    
    return ( !state.logged ? <Outlet /> : <Navigate to="/" /> );
}
