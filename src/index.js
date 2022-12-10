import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";
import Count from "./pages/count";
import ChildComponent from "./components/ChildComponent";

const name = "jerin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LandingPage />
    <Count myName={name} age="89">
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
    </Count>
  </React.StrictMode>
);
