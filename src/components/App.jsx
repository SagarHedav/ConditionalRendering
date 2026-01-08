import React from "react";
import Login from "./Login";
var isLogin = false;
function renderConditionally() {
  if (isLogin) {
    <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}
function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
