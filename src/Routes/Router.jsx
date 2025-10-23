import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/Pages/Home";
import Services from "../Components/Pages/Services";
import MyProfile from "../Components/Pages/MyProfile";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '',
                    element: <Home></Home>
                },
                {
                    path: '/services',
                    element: <Services></Services>
                },
                {
                    path: '/myProfile',
                    element: <MyProfile></MyProfile>
                },
            ]
        },
        {
            path: ''
        }
    ]
)

export default router;