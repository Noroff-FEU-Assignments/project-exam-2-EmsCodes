import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/UseAxios";
import ValidationError from "./FormError";
import { HOLIDAZE_BASE_URL } from "../../data/api";
// import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";

const schema = yup.object().shape({
  name: yup.string().required("Please add name"),
  short_description: yup
    .string()
    .required("Please add a short description, max 20 characters"),
});

function AddHotel() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const http = useAxios();
  //   const auth = useContext(AuthContext);
  //   console.log(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setError(null);
    console.log(data);

    try {
      const response = await http.post(HOLIDAZE_BASE_URL + "api/hotels", data);
      console.log(response);
    } catch (error) {
      console.log(error);
      setError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && <ValidationError>{error}</ValidationError>}
      <fieldset disabled={submitting}>
        <div>
          <input
            name="name"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <ValidationError>{errors.name.message}</ValidationError>
          )}
          <input
            name="short_description"
            placeholder="Short description"
            {...register("short_description", { required: true })}
          />
          {errors.shortDescription && (
            <ValidationError>{error.short_description.message}</ValidationError>
          )}
        </div>
        <button>{submitting ? "Submitting..." : "Submit"}</button>
      </fieldset>
    </form>
  );
}

export default AddHotel;
