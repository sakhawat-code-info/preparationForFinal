import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import App from "../App";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/Order/OrderFood";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "orderFood/:category",
                element: <OrderFood />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
]);
