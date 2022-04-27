import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { HOLIDAZE_BASE_URL, AUTH_URL } from "../../data/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";
import ValidationError from "./FormError";
import styles from "../../../styles/components/utils/forms/LoginForm.module.css";
import Heading from "../global/heading/Heading";

const url = HOLIDAZE_BASE_URL + AUTH_URL;

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

  async function OnSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    console.log(data);

    // const test = JSON.stringify({
    //   identifier: data.username,
    //   password: data.password,
    // });

    // const options = {
    //   method: "POST",
    //   body: test,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    try {
      const response = await axios.post(url, {
        identifier: data.username,
        password: data.password,
      });

      console.log(response.data.jwt);
      setAuth(response.data.jwt);
      //   setAuth(result.jwt);
      router.push("/admin");
    } catch (error) {
      setLoginError("Login failed");
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(OnSubmit)} className={styles.loginForm}>
      <Heading content="Admin login" className={styles.headingOne} />
      {loginError && <ValidationError>{loginError}</ValidationError>}
      <fieldset disabled={submitting} className={styles.fieldSet}>
        <div className={styles.inputContainer}>
          <label htmlFor="username" className="srOnly">
            Username
          </label>
          <input
            name="username"
            placeholder="Username"
            {...register("username", { required: true })}
            className={styles.formInput}
          ></input>
          {errors.username && (
            <ValidationError>{errors.username.message}</ValidationError>
          )}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className="srOnly">
            Password
          </label>
          <input
            name="password"
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
            className={styles.formInput}
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
