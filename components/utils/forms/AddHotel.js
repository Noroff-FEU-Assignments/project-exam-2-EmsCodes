import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/UseAxios";
import ValidationError from "./FormError";
import { HOLIDAZE_BASE_URL } from "../../data/api";

const schema = yup.object().shape({
  name: yup.string().required("Please add name"),
  short_description: yup
    .string()
    .required("Please add a short description, max 20 characters"),
  description: yup.string().required("Please add description"),
});

function AddHotel() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const http = useAxios();
  const [hotelChecked, setHotelChecked] = useState(false);

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

    const formData = { data };

    try {
      const response = await http.post(
        HOLIDAZE_BASE_URL + "api/hotels",
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
        </div>
        <div>
          <input
            name="short_description"
            placeholder="Short description"
            {...register("short_description", { required: true })}
          />
          {errors.shortDescription && (
            <ValidationError>{error.short_description.message}</ValidationError>
          )}
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <ValidationError>{error.description.message}</ValidationError>
          )}
        </div>
        <div>
          <div>
            <label htmlFor="hotel">Hotel</label>
            <input
              type="checkbox"
              id="hotel"
              name="hotel"
              {...register("hotel", { required: false })}
            />
            {}
          </div>
          <div>
            <label htmlFor="B&B">B&B</label>
            <input
              type="checkbox"
              id="B&B"
              name="b&b"
              {...register("B&B", { required: false })}
            />
          </div>
          <div>
            <label htmlFor="guesthouse">Guesthouse</label>
            <input
              type="checkbox"
              id="guesthouse"
              name="guesthouse"
              {...register("guesthouse", { required: false })}
            />
          </div>
          <div>
            <inp
          </div>
        </div>
        <button>{submitting ? "Submitting..." : "Submit"}</button>
      </fieldset>
    </form>
  );
}

export default AddHotel;
