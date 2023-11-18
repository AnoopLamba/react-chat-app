import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ChatContextProvider from "./Context/ChatContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChatContextProvider>
    <App />
  </ChatContextProvider>
);
