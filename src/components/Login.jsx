import React from "react";
import Input from "./Input";
function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="username"></Input>
      <Input type="password" placeholder="password"></Input>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
