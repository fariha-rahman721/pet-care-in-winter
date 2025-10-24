import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/Pages/Home";
import Services from "../Components/Pages/Services";
import MyProfile from "../Components/Pages/MyProfile";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import CardDetails from "../Components/CardDetails/CardDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Components/Pages/Loading";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                
            ],
            
        },
        {
                    path: '/services/:id',
                    element: <PrivateRoute>
                        <Services></Services>
                    </PrivateRoute>,
                    loader: () => fetch('/careService.json'),
                    hydrateFallbackElement: <Loading></Loading>

                },
                {
                    path: '/myProfile',
                    element: <MyProfile></MyProfile>
                },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: '/auth/login',
                    element: <Login></Login>,
                },
                {
                    path: '/auth/register',
                    element: <Register></Register>,
                },
                

            ]

        },
        {
            path: '/cardDetails',
            element: <CardDetails></CardDetails>,
            loader: () => fetch('/careService.json'),
             hydrateFallbackElement: <Loading></Loading>
            
        }
    ]
)

export default router;