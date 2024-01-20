"use client";

import * as yup from "yup";
import Input from "./Input";

import { useState, useEffect } from "react";
import { Field, Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export const times = [
  "9:30am",
  "10:00am",
  "10:10am",
  "11:15am",
  "3:30pm",
  "4:00pm",
  "4:30pm",
  "5:00pm",
  "5:30pm",
  "6:00pm",
  "6:30pm",
  "7:00pm",
  "7:30pm",
  "8:00pm",
  "8:30pm",
];

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const displayTimes = () => {
    return (
      <div className="flex flex-col">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="time"
        >
          Select a time
        </label>
        <Field
          as="select"
          type="time"
          name="time"
          id="time"
          className="w-fit h-fit min-w-32 appearance-none disabled:bg-slate-50 block bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          {!formik.errors.date && amount
            ? times.slice(0, amount).map((time) => {
                return (
                  <option key={time} value={time}>
                    {time}
                  </option>
                );
              })
            : ""}
          {!amount > 0 ||
            (formik.errors.date && (
              <option defaultValue disabled>
                Please select a date first
              </option>
            ))}
        </Field>
      </div>
    );
  };

  const date = new Date();
  date.setDate(date.getDate() - 1);

  const formik = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      email: "",
      tel: "",
      nrGuests: 2,
      date: "",
      time: "",
      message: "",
      pref: "inside",
      occ: "casual",
    },
    onSubmit() {
      setSubmitted(true);
      navigate("success");
    },
    validationSchema: yup.object({
      lastName: yup
        .string()
        .trim()
        .required("Please enter your last name")
        .min(3, "Your last name must be at least 3 characters long")
        .max(50, "Your last name can only be 50 characters long"),
      firstName: yup
        .string()
        .trim()
        .required("Please enter your first name")
        .min(3, "Your first name must be at least 3 characters long")
        .max(50, "Your first name can only be 50 characters long"),
      email: yup
        .string()
        .lowercase()
        .email("The email address is not valid")
        .required("Please enter an email address"),
      tel: yup
        .string()
        .trim()
        .required("A phone number is required")
        .max(15, "The phone number can only be 15 characters long")
        .matches(/^\d+$/, "The phone number can only contain numbers"),
      nrGuests: yup
        .number()
        .min(2, "Reservations can only be made for groups bigger than 1")
        .max(8, "For groups bigger than 8, please call us")
        .required("Please enter the number of guests."),
      date: yup
        .date()
        .min(date, "You can't make a reservation in the past")
        .required("Please enter a date"),
      time: yup.string().required("Please enter a time"),
      pref: yup.string().required("Please select a preference"),
      message: yup.string().trim(),
    }),
  });

  useEffect(() => {
    return () => {
      formik.values.date && setAmount(Math.floor(Math.random() * 15));
      amount > 0 && formik.setFieldValue("time", times[1]);
    };
  }, [formik.values.date]);

  return (
    <FormikProvider value={formik}>
      <fieldset disabled={submitted}>
        <Form className="max-w-3xl">
          <section>
            <div className="mb-6 w-full">
              <h1 className="font-title text-6xl font-medium">
                Ready to reserve a table? {true}
              </h1>
              <p className="mt-1 leading-6 text-secondary">
                Fill out this form to make a reservation at our restaurant.
              </p>
            </div>
          </section>
          <section className="border-2 rounded-2xl border-gray-200 p-6 mb-6">
            <h2 className="text-xl uppercase font-extrabold mb-4">
              Chose the details
            </h2>
            <div className="flex gap-4 md:gap-8 flex-wrap md:flex-nowrap">
              <Input refe="date" label="date" type="date" />
              <Input refe="nrGuests" label="guests" type="number" />
              {displayTimes()}
            </div>
            <div className="flex gap-4 md:gap-8 mt-4 flex-wrap">
              <div className="flex gap-2 flex-wrap">
                <p className="uppercase font-medium text-secondary">Area</p>
                <div className="flex gap-2">
                  <Field
                    type="radio"
                    name="pref"
                    value="inside"
                    id="pref"
                    className="border-gray-200"
                  />
                  <label htmlFor="pref">Inside</label>
                </div>
                <div className="flex gap-2">
                  <Field
                    type="radio"
                    name="pref"
                    value="outside"
                    id="pref"
                    className="border-gray-200"
                  />
                  <label htmlFor="pref">outside</label>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <p className="uppercase font-medium text-secondary">Occasion</p>
                <div className="flex gap-2">
                  <Field
                    type="radio"
                    name="occ"
                    value="casual"
                    id="occ"
                    className="border-gray-200"
                  />
                  <label htmlFor="occ">Casual</label>
                </div>
                <div className="flex gap-2">
                  <Field
                    type="radio"
                    name="occ"
                    value="birthday"
                    id="occ"
                    className="border-gray-200"
                  />
                  <label htmlFor="occ">Birthday</label>
                </div>
                <div className="flex gap-2">
                  <Field
                    type="radio"
                    name="occ"
                    value="anniversary"
                    id="occ"
                    className="border-gray-200"
                  />
                  <label htmlFor="occ">Anniversary</label>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="grid grid-cols-2 gap-4">
              <Input
                refe="lastName"
                label="Last name"
                type="text"
                auto="family-name"
              />
              <Input
                refe="firstName"
                label="First name"
                type="text"
                auto="given-name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input refe="email" label="Email" type="email" auto="email" />
              <Input refe="tel" label="phone number" type="tel" auto="tel" />
            </div>
          </section>
          <section>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Got a request?
            </label>
            <Field
              as="textarea"
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-h-44"
              type="text"
              name="message"
              id="message"
            ></Field>
          </section>
          <button
            type="submit"
            className="px-4 py-2 border-2 border-secondary hover:bg-secondary hover:text-white text-secondary mt-4 rounded-2xl w-full  uppercase font-medium"
          >
            Reserve a table
          </button>
        </Form>
      </fieldset>
    </FormikProvider>
  );
}
