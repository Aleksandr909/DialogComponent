import React from "react";
import "./App.css";
import "typeface-roboto";
import FormDialog from "./components/Button";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App App-header">
        <FormDialog />
      </div>
    </Provider>
  );
}

export default App;
