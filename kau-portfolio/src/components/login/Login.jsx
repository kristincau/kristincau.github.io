import React, { useState } from "react";
import classes from "./login.module.scss";
import PropTypes from "prop-types";
import { MdOutlineLock as IconLock } from "react-icons/md";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      password,
    });
    setToken(token);
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label>
          <p>Password</p>
        </label>
        <div className={classes.content}>
          <IconLock className={classes.icon} />
          <input
            className={classes.textField}
            type="password"
            // value="CollabWithKristin2022"
            onChange={(e) => setPassword(e.target.value)}
            // placeholder="Password"
          />
          <button className={classes.button} type="submit">
            Enter
          </button>
        </div>
        <p className={classes.error}>Wrong password. Please try again</p>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
