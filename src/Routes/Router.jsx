import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/Pages/Home";
import Services from "../Components/Pages/Services";
import MyProfile from "../Components/Pages/MyProfile";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AuthLayout from "../Layout/AuthLayout";

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
                    path: '/services',
                    Component: <Services></Services>
                },
                {
                    path: '/myProfile',
                    Component: <MyProfile></MyProfile>
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

        }
    ]
)

export default router;