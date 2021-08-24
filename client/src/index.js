import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes/App";
import { Provider } from "react-redux";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals();
