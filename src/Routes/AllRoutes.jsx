import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import App from "../App";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/Order/OrderFood";

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
                path: "orderFood",
                element: <OrderFood />,
            },
        ],
    },
]);
