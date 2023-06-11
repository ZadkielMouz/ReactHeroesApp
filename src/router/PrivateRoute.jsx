import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"
import { HeroesPage } from "../heroes";



export const PrivateRoute = ({ children }) => {

    const { state } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    //Guardar la ultima busqueda realizada, si no, pondrá una ruta de origen
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return (state.logged)
        ?
        <HeroesPage>
            <Outlet />
        </HeroesPage>
        :
        <Navigate to="/login" />
}
