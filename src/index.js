import React from "react";
import ReactDOM from "react-dom";
import configStore from './configs/configureStore';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

const store = configStore();
ReactDOM.render(
  // makes the Redux store available to any nested components that need to access the Redux store.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
