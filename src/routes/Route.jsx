
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FeatureDetail from "../pages/Home/FeatureDetail";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeatureProperty from "../pages/Home/FeatureProperty";
import Profile from "../pages/Profile/Profile";
import Blog from "../pages/Blog/Blog";
import ContactRoute from "../pages/Contact/ContactRoute";
import Estate from "../pages/Estates/Estate";
import ProfileUser from "../pages/ProfileUser/ProfileUser";
// import Contact from "../pages/Contact/Contact";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/residential.json')
            },
            {
                path: '/features/:id',
                element: <PrivateRoute><FeatureDetail></FeatureDetail></PrivateRoute>,
                loader: () => fetch('../residential.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contact',
                element: <ContactRoute></ContactRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/estates',
                element: <PrivateRoute><Estate></Estate></PrivateRoute>,
                loader: () => fetch('/residential.json')
            },
            {
                path: '/update',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/user',
                element: <PrivateRoute><ProfileUser></ProfileUser> </PrivateRoute>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            }
        ]
    }
]);

export default route;