import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"



export const PrivateRoute = ({children}) => {

    const { state } = useContext(AuthContext);
    const {pathname, search} = useLocation();

    //Guardar la ultima busqueda realizada, si no, pondrá una ruta de origen
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    console.log("re-render")

    return ( state.logged ) ? children : <Navigate to="/login" /> 
}
