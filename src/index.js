import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

//const rootElement = document.getElementById("root");
//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  rootElement
//);
