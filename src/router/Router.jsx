import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { DcPage, MarvelPage, SearchPage, Hero } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const router = createHashRouter(
    [
        {
            path: '/',
            element: <PrivateRoute />,
            children: [
                {
                    index: true,
                    element: <Navigate to={'heroes/marvel'} replace={true} />
                },
                {
                    path: 'heroes/marvel',
                    element: <MarvelPage />
                },
                {
                    path: 'heroes/dc',
                    element: <DcPage />
                },
                {
                    path: 'heroes/search',
                    element: <SearchPage />
                },
                {
                    path: 'heroes/:heroId',
                    element: <Hero />
                },
            ],

        },
        {
            path: 'login',
            element: <PublicRoute />,
            children: [
                {
                    index: true,
                    element: <LoginPage />
                },
                {
                    path: '*',
                    element: <Navigate to={'/'} replace={true} />
                }
                
            ]
        },
        {
            path: '*',
            element: <Navigate to={'/'} replace={true} />
        }
    ],
)

export const Router = () => {
    return <RouterProvider router={router} />
}
