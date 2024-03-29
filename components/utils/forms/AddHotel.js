import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/UseAxios";
import ValidationError from "./FormError";
import { HOLIDAZE_BASE_URL } from "../../data/api";
import styles from "./AddHotel.module.css";
import cta from "../buttons/Cta.module.css";
import Alert from "react-bootstrap/Alert";

const schema = yup.object().shape({
  name: yup.string().required("Please add name"),
  short_description: yup
    .string()
    .max(30)
    .required("Please add a short description, max 30 characters"),
  description: yup.string().required("Please add description"),
  main_image: yup.mixed().required("Please add main image"),
  price_1: yup.number().min(1).required("Please add price"),
  price_2: yup.number().min(1).required("Please add price"),
  price_3: yup.number().min(1).required("Please add price"),
});

function AddHotel(event) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const http = useAxios();
  const [submitted, setSubmitted] = useState(false);
  // const [file, setFile] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data, e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError(null);

    const formData = new FormData();
    console.log(data);
    const hotelData = {
      "B&B": data["B&B"],
      description: data.description,
      guesthouse: data.guesthouse,
      hotel: data.hotel,
      name: data.name,
      price_1: data.price_1,
      price_2: data.price_2,
      price_3: data.price_3,
      short_description: data.short_description,
    };

    formData.append("files.main_image", data.main_image[0]);
    formData.append("files.images", data.images[0]);
    formData.append("files.images", data.images[1]);
    formData.append("files.images", data.images[2]);
    formData.append("data", JSON.stringify(hotelData));

    try {
      const response = await http.post(
        HOLIDAZE_BASE_URL + "api/hotels",
        formData
      );

      if (response.data.data.attributes.createdAt) {
        setSubmitted(true);
        reset();
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      encType="multipart/form-data"
    >
      {error && <ValidationError>{error}</ValidationError>}
      {submitted ? (
        <Alert variant="success">
          <Alert.Heading>New establishement created!</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}
      <fieldset disabled={submitting}>
        <div className={styles.sectionOne}>
          <div>
            <label htmlFor="name" className="srOnly">
              Name
            </label>
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
            <label htmlFor="short_description" className="srOnly">
              Short description
            </label>
            <input
              id="short_description"
              name="short_description"
              placeholder="Short description, max 30 characters..."
              {...register("short_description", { required: true })}
            />
            {errors.short_description && (
              <ValidationError>
                {errors.short_description.message}
              </ValidationError>
            )}
          </div>
          <div>
            <label htmlFor="description" className="srOnly">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <ValidationError>{errors.description.message}</ValidationError>
            )}
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div>
            <label htmlFor="hotel">Hotel checkbox</label>
            <input
              type="checkbox"
              id="hotel"
              name="hotel"
              {...register("hotel", { required: false })}
            />
            {}
          </div>
          <div>
            <label htmlFor="B&B">B&B checkbox</label>
            <input
              type="checkbox"
              id="B&B"
              name="b&b"
              {...register("B&B", { required: false })}
            />
          </div>
          <div>
            <label htmlFor="guesthouse">Guesthouse checkbox</label>
            <input
              type="checkbox"
              id="guesthouse"
              name="guesthouse"
              {...register("guesthouse", { required: false })}
            />
          </div>
        </div>
        <div></div>
        <div className={styles.sectionThree}>
          <div>
            <label htmlFor="price_1">Price for room one</label>
            <input
              type="number"
              id="price_1"
              defaultValue={0}
              name="price_1"
              {...register("price_1", { required: true })}
            />
            {errors.price_1 && (
              <ValidationError>{errors.price_1.message}</ValidationError>
            )}
          </div>
          <div>
            <label htmlFor="price_2">Price for room two</label>
            <input
              type="number"
              id="price_2"
              name="price_2"
              defaultValue={0}
              {...register("price_2", { required: true })}
            />
            {errors.price_2 && (
              <ValidationError>{errors.price_2.message}</ValidationError>
            )}
          </div>
          <div>
            <label htmlFor="price_3">Price for room three</label>
            <input
              type="number"
              defaultValue={0}
              id="price_3"
              name="price_3"
              {...register("price_3", { required: true })}
            />
            {errors.price_3 && (
              <ValidationError>{errors.price_3.message}</ValidationError>
            )}
          </div>
        </div>
        <div className={styles.sectionFour}>
          <div>
            <label htmlFor="main_image">Main image</label>
            <input
              type="file"
              id="main_image"
              name="main_image"
              {...register("main_image", { required: true })}
            />
            {errors.main_image && (
              <ValidationError>{errors.main_image.message}</ValidationError>
            )}
            <p>
              Max size around 200kb. Minimum width 2000px, minimum height
              1000px.
            </p>
          </div>
          <div>
            <label htmlFor="images">Room 1</label>
            <input
              multiple
              type="file"
              id="images"
              name="images"
              {...register("images", { required: true })}
            />
            {errors.images && (
              <ValidationError>{errors.images.message}</ValidationError>
            )}
            <p>
              Max size around 200kb. Minimum width 1000px, minimum height 500px.
            </p>
            <p>
              <span>Important!</span> Choose - and add - all room images at the
              same time
            </p>
          </div>
        </div>
        <div className={styles.btn}>
          <button className={cta.btn}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default AddHotel;
