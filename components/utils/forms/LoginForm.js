import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { HOLIDAZE_BASE_URL, AUTH_URL } from "../../data/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";
import ValidationError from "./FormError";

const url = HOLIDAZE_BASE_URL + "/auth/local";

const schema = yup.object().shape({
  username: yup.string().required("Please enter username"),
  password: yup.string().required("Please enter password"),
});

function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log(response);
      setAuth(result);
      router.push("/");
    } catch (error) {
      console.log(error);
      setLoginError("Login failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loginError && <ValidationError>{loginError}</ValidationError>}
      <fieldset disabled={submitting}>
        <div>
          <label htmlFor="username" className="srOnly">
            Username
          </label>
          <input
            name="username"
            placeholder="Username"
            {...register("username", { required: true })}
          ></input>
          {errors.username && (
            <ValidationError>{errors.username.message}</ValidationError>
          )}
        </div>
        <div>
          <label htmlFor="password" className="srOnly">
            Password
          </label>
          <input
            name="password"
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
          ></input>
          {errors.password && (
            <ValidationError>{errors.password.message}</ValidationError>
          )}
        </div>
        <button>{submitting ? "Logging in..." : "Login"}</button>
      </fieldset>
    </form>
  );
}

export default LoginForm;
