import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

import "./styles.css";

export default function App() {
  const schema = Joi.object({
    username: Joi.string().valid("asdf").required()
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema)
  });

  const onSubmit = (values) => {
    try {
      console.log(schema.validate(values)); // Printing the username error
      alert("No error"); // No error alert is shwon
    } catch(e) {
      alert(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>joiResolver</h1>
      <label>username</label>
      <input name="username" ref={register} />
      {errors.username && <p>{errors.username.message}</p>}
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
