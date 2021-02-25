import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "@hapi/joi";

import "./styles.css";

const schema = Joi.object({
  username: Joi.string().required()
});

export default function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema)
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
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
