import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { rootRouter } from "./router/router.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={rootRouter} />
  </Provider>
);
