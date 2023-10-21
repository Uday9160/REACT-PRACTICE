import React, { useReducer } from "react";

function LoginForm() {
  const [details, setDetails] = useReducer({
    name: "",
    email: "",
    password: "",
  });
  const inputChangeHanler = (e, type) => {};
  const handleSubmit = (e, id) => {
    e.preventDefault();
    console.log(id);
    console.log(e.target);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
        <label id="name">Name :</label>
        <input
          type="text"
          max={20}
          min={4}
          htmlFor="name"
          value={details.name}
          onChange={(e) => inputChangeHanler(e, id)}
        />
        <label id="email">Email :</label>
        <input
          type="email"
          max={20}
          min={4}
          htmlFor="email"
          value={details.email}
        />
        <label id="password">Password :</label>
        <input
          type="password"
          max={20}
          min={4}
          htmlFor="password"
          value={details.password}
        />
        <button>Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
