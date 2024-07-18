import { useState } from "react";

function App() {
  // {
  //   name: "",
  //   email: "",
  //   chips: ""
  // }
  const [values, setValues] = useState({
    name: "",
    email: "",
    chips: "",
    specialRequests: "",
    terms: false,
  });

  const handleChange = (event) => {
    //el valor del input y el nombre del input, valor: Alex y nombre: name
    //el valor del input y el nombre del input, valor: alexgmail.com y nombre: email
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Order name: ${values.name}. Email is ${values.email}. Chips: ${values.chips}. Special request: ${values.specialRequests}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Order a hamburguer</h1>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <br />
      <select name="chips" value={values.chips} onChange={handleChange}>
        <option value="" label="Do you want to order chips?" />
        <option value="yes" label="Yes" />
        <option value="no" label="No" />
      </select>
      <br />
      <label htmlFor="specialRequests">Special requests?</label>
      <br />
      <textarea
        id="specialRequests"
        name="specialRequests"
        value={values.specialRequests}
        onChange={handleChange}
      />
      <br />
      <input
        id="terms"
        name="terms"
        type="checkbox"
        onChange={handleChange}
        checked={values.terms}
      />
      <label htmlFor="terms">I accept the terms and conditions</label>
      <br />
      <button type="submit">Make an order!!!</button>
    </form>
  );
}

export default App;
