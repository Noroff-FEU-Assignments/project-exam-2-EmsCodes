import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "./FormError";
import { HOLIDAZE_BASE_URL, MESSAGES } from "../../data/api";
import axios from "axios";
import styles from "./Contact.module.css";
import Heading from "../global/heading/Heading";
import cta from "../buttons/Cta.module.css";
import Link from "next/link";
import { Spinner } from "react-bootstrap";

const schema = yup.object().shape({
  name: yup.string().required("Please add name"),
  email: yup.string().email().required("Please add an email"),
  message: yup.string().required("Please add a message"),
});

export default function CreateMessage() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

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
      const response = await axios.post(HOLIDAZE_BASE_URL + MESSAGES, formData);
      console.log(response.data.data);
      if (response.data.data.attributes.createdAt) {
        setSubmitted(true);
      }
    } catch (error) {
      console.log(error);
      setError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  return submitted ? (
    <div className={styles.messageConfirmation}>
      <p>Thank you for your message!</p>
      <p>The team at Holidaze will contact you shortly</p>
      <Link href="/accommodations">
        <a>Back to hotels</a>
      </Link>
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {error && <ValidationError>{error}</ValidationError>}
      <fieldset disabled={submitting}>
        <legend>
          <Heading content="Contact" style={styles.heading} />
        </legend>
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
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <ValidationError>{errors.email.message}</ValidationError>
          )}
        </div>
        <div>
          <label htmlFor="message" className="srOnly">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <ValidationError>{errors.message.message}</ValidationError>
          )}
        </div>
        <button className={cta.btn}>
          {submitting ? "Submitting..." : "Send message"}
        </button>
      </fieldset>
    </form>
  );
}
