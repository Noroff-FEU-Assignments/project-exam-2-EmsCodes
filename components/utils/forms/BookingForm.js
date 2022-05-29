import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "./FormError";
import { HOLIDAZE_BASE_URL } from "../../data/api";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingForm.module.css";

const schema = yup.object().shape({
  name: yup.string().required("Please add name"),
  email: yup.string().email().required("Please add an email"),
  persons: yup.number().required("How many guests?"),
  room_type: yup.string().required("Please choose room"),
  message: yup.string().required("Please choose a date"),
});

export default function BookingEnquiry() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

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
        HOLIDAZE_BASE_URL + "api/enquiries",
        formData
      );
      if (response.data.data.attributes.createdAt) {
        setSubmitted(true);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return submitted ? (
    <div>
      <p>Booking submitted!</p>
      <p>You will hear from us shortly</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {error && <ValidationError>{error}</ValidationError>}
      <legend className="srOnly">Booking form</legend>
      <fieldset disabled={submitting}>
        <div>
          <label htmlFor="name" className="srOnly">
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <ValidationError>{errors.name.message}</ValidationError>
          )}
        </div>
        <div>
          <label htmlFor="email" className="srOnly">
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <ValidationError>{errors.email.message}</ValidationError>
          )}
        </div>
        <div>
          <label htmlFor="number" className="srOnly">
            How many guests?
          </label>
          <input
            id="number"
            type="number"
            min="1"
            max="5"
            name="persons"
            placeholder="Number of persons"
            {...register("persons", { required: true })}
          />
          {errors.persons && (
            <ValidationError>{errors.persons.message}</ValidationError>
          )}
        </div>
        <div>
          <label htmlFor="room-type" className="srOnly">
            Select room type
          </label>
          <select
            id="room-type"
            name="room_type"
            placeholder="room_type"
            {...register("room_type", { required: true })}
          >
            <option value="">--Choose room type--</option>
            <option value="regular">Regular</option>
            <option value="suite">Suite</option>
            <option value="president suite">President suite</option>
          </select>
          {errors.room_type && (
            <ValidationError>{errors.room_type.message}</ValidationError>
          )}
        </div>
        <div>
          <label htmlFor="date" className="srOnly">
            Choose a date
          </label>
          <DatePicker
            id="date"
            placeholderText="Choose a date..."
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => {
              setDateRange(date);
            }}
          />
        </div>
        <div>
          <input
            className="srOnly"
            name="message"
            value={dateRange}
            {...register("message", { required: true })}
          />
        </div>
        <button className={styles.cta}>
          {submitting ? "Submitting..." : "Book"}
        </button>
      </fieldset>
    </form>
  );
}
