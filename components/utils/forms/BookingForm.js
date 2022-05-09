import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "./FormError";
import { HOLIDAZE_BASE_URL } from "../../data/api";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const schema = yup.object().shape({
  name: yup.string().required("Please add name"),
  email: yup.string().email().required("Please add an email"),
  message: yup.string().required("Please add a message"),
});

export default function BookingEnquiry() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(new Date());

  console.log(value);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data, event) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    console.log(data);

    const formData = { data };

    try {
      const response = await axios.post(
        HOLIDAZE_BASE_URL + "api/messages",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="FileUpload">
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
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <ValidationError>{errors.email.message}</ValidationError>
          )}
        </div>
        <div>
          <label htmlFor="date-from">From</label>
          <Calendar
            id="date-from"
            onChange={setValue}
            value={value}
            {...register("date", { required: true })}
          />
        </div>
        <button>{submitting ? "Submitting..." : "Send message"}</button>
      </fieldset>
    </form>
  );
}
