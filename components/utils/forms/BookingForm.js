import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "./FormError";
import { HOLIDAZE_BASE_URL } from "../../data/api";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const schema = yup.object().shape({
  name: yup.string().required("Please add name"),
  email: yup.string().email().required("Please add an email"),
  startDate: yup.date().required("Please choose start date"),
  endDate: yup.date().required("Please choose end date"),
});

export default function BookingEnquiry() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  //   const [startDate, setStartDate] = useState(new Date());
  //   const [endDate, setEndDate] = useState(new Date());

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  console.log(startDate);

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
        HOLIDAZE_BASE_URL + "/api/enquiries",
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
          <DatePicker
            name="bookingDate"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
          />

          {/* <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <input
            name="startDate"
            value={startDate}
            {...register("startDate", { required: true })}
          /> */}
          {/* {errors.startDate && (
            <ValidationError>{errors.startDate.message}</ValidationError>
          )} */}
        </div>

        {/* <div> */}
        {/* <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        <input
          name="endDate"
          value={endDate}
          {...register("endDate", { required: true })}
        /> */}
        {/* {errors.endDate && (
            <ValidationError>{errors.endDate.message}</ValidationError>
          )} */}
        {/* </div> */}

        <button>{submitting ? "Submitting..." : "Book"}</button>
      </fieldset>
    </form>
  );
}
