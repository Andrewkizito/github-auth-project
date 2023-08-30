import React from "react";
import ReactDOM from "react-dom/client";

// App Root
import App from "./App";

// Router
import { BrowserRouter } from "react-router-dom";

// Styles
import "./index.css";
import "animate.css/animate.min.css";
import "react-notifications-component/dist/theme.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
