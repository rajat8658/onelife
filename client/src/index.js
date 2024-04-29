import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./Components/context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
//In this code snippet, AuthContextProvider is being used to wrap the App component, which means that any child components of App can access the authentication-related data and functionality provided by the context.

