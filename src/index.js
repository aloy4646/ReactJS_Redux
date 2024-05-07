import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/index";
import App from "./app";

import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && composeWithDevTools()
)

const el = document.getElementById("root")

// // tell react to take control of that element
const root = ReactDOM.createRoot(el)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);