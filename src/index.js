import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { legacy_createStore as createStore } from "redux";
import movies from "./reducers";

const store = createStore(movies);
console.log("store", store);
console.log("Before STATE", store.getState());
store.dispatch({
  type: "ADD_MOVIES",
  movies: [{ name: "Superman " }],
});
console.log("After State", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
