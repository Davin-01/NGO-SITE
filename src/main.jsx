import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";  // Keep Router here
import './index.css';  // Import your CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>  {/* Only one Router in the entry point */}
    <App />
  </Router>
);
