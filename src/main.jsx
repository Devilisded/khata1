import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./context/UserIdContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
