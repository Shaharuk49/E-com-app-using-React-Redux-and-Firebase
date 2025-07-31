import { createBrowserRouter } from "react-router";
import Shop from "../pages/Shop";
import RootLayout from "../pages/RootLayout";
import Cart from "../pages/cart";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", index: true, element: <Shop /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
