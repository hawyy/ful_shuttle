import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RegisterPassanger from "./pages/register/RegisterPassanger.tsx";
import RegisterDriver from "./pages/register/RegisterDriver.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RegisterPassanger />
    {/* <RegisterDriver /> */}
  </React.StrictMode>
);
