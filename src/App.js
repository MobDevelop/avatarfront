import React from "react";
import Routes from "./scenes/Route";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./scenes/Reducers";
import "./App.css";
const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
