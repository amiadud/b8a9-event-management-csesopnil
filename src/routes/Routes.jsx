import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Services from "../components/Services/Services";
import Service from "../components/Services/Service";
import ServiceDetail from "../components/Services/ServiceDetail";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Dashboard from "../components/Profile/Profile";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:"/",
                element: <Home></Home>,
                loader: () => fetch('concerts.json')
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/services/",
                element: <Services></Services>
            },
            {
                path:"/service-details/:id",
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
            },
            {
                path:"/Profile/",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            }
        ]
    }
])

export default Routes;