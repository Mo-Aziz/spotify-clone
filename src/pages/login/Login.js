import React from 'react';
import { loginUrl } from '../../spotify';
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img src="https://respect-mag.com/wp-content/uploads/2020/12/maxresdefault.jpg" alt="spotify-logo"/>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
