import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

function App() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    chips: Yup.string().required("Chips is required"),
    terms: Yup.boolean()
      .oneOf([true], "You must accept terms and conditions")
      .required("You must accept terms and conditions"),
  });

  //Vamos a definir 3 cosas
  //1. El estado del formulario, debe ser un objeto con todos las valores
  //2. Pasarle el schema de validacion, le digo con que tiene que validar los elementos del formulario
  //3. Que vamos a ejecutar si la validacion es correcta
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      chips: "",
      specialRequests: "",
      terms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      alert(
        `Order name: ${values.name}. Email is ${values.email}. Chips: ${values.chips}. Special request: ${values.specialRequests}`
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Order a hamburguer</h1>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.touched.name && formik.errors.name ? (
        <span style={{ color: "red" }}>{formik.errors.name}</span>
      ) : null}
      <br />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email ? (
        <span style={{ color: "red" }}>{formik.errors.email}</span>
      ) : null}
      <br />
      <select
        name="chips"
        value={formik.values.chips}
        onChange={formik.handleChange}
      >
        <option value="" label="Do you want to order chips?" />
        <option value="yes" label="Yes" />
        <option value="no" label="No" />
      </select>
      {formik.touched.chips && formik.errors.chips ? (
        <span style={{ color: "red" }}>{formik.errors.chips}</span>
      ) : null}
      <br />
      <label htmlFor="specialRequests">Special requests?</label>
      <br />
      <textarea
        id="specialRequests"
        name="specialRequests"
        value={formik.values.specialRequests}
        onChange={formik.handleChange}
      />
      <br />
      <input
        id="terms"
        name="terms"
        type="checkbox"
        onChange={formik.handleChange}
        checked={formik.values.terms}
      />
      <label htmlFor="terms">I accept the terms and conditions</label>
      {formik.touched.terms && formik.errors.terms ? (
        <span style={{ color: "red" }}>{formik.errors.terms}</span>
      ) : null}
      <br />
      <button type="submit">Make an order!!!</button>
    </form>
  );
}

export default App;
