import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  // </React.StrictMode>,

  <div>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;400&display=swap"
        rel="stylesheet"
      />
    </head>
    
     <BrowserRouter>
     <App />
     </BrowserRouter>
    
    
    

     
   
  </div>
);
