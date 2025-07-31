// src/pages/RootLayout.jsx
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function RootLayout() {
  console.log("I am rendered");

  return (
    <>
      <div id="sidebar">
        <Nav />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
