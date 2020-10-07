import React, { useReducer } from "react";
import "./App.css";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Main from "./components/Main/Main";
import { Context } from "./context/context";
import reducer from "./context/reducer";

function App() {
  const [tasks, dispatch] = useReducer(reducer, {
    sidebar: true,
    currentComponent: "About the Company",
  });
  return (
    <Context.Provider value={{ tasks, dispatch }}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
