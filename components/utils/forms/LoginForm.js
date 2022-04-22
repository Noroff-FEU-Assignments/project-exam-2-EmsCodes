import React from "react";
import Cta from "../buttons/Cta";

function LoginForm() {
  return (
    <form>
      <fieldset>
        <div>
          <label htmlFor="username" className="srOnly">
            Username
          </label>
          <input name="username" placeholder="Username"></input>
        </div>
        <div>
          <label htmlFor="password" className="srOnly">
            Password
          </label>
          <input name="password" placeholder="Password"></input>
        </div>
        <Cta content="Login" />
      </fieldset>
    </form>
  );
}

export default LoginForm;
