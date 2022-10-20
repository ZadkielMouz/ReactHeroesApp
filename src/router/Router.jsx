import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { DcPage, MarvelPage, HeroesPage, SearchPage, Hero } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const router = createHashRouter(
    [
        {
            path: '/',
            element:
                <PrivateRoute>
                    <HeroesPage />
                </PrivateRoute>,
            children: [
                {
                    path: '/',
                    element: <Navigate to={"/marvel"} />
                },
                {
                    path: '*',
                    element: <Navigate to={'/'} />
                },
                {
                    path: 'marvel',
                    element: <MarvelPage />
                },
                {
                    path: 'dc',
                    element: <DcPage />
                },
                {
                    path: 'search',
                    element: <SearchPage />
                },
                {
                    path: 'hero/:heroId',
                    element: <Hero />
                },

            ]
        },
        {
            path: 'login',
            element:
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
        },
    ],
)

export const Router = () => {
    return <RouterProvider router={router} />
}
