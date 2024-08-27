import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Registrarse");
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form">
        <h2>{currentState} </h2>
        {currentState === "Registrarse" ? (
          <input
            type="text"
            placeholder="Nombre de usuario"
            required
            className="form-input"
          />
        ) : null}

        <input
          type="email"
          placeholder="Email"
          required
          className="form-input"
        />
        <input
          type="password"
          placeholder="Constraseña"
          className="form-input"
          required
        />
        <button type="submit">
          {currentState === "Registrarse" ? "Crear cuenta" : "Entrar ahora"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Estoy de acuerdo con los términos de privacidad.</p>
        </div>
        <div className="login-forgot">
          {currentState === "Registrarse" ? (
            <p className="login-toggle">
              Ya tengo una cuenta{" "}
              <span onClick={() => setCurrentState("Entrar")}>Entrar aquí</span>{" "}
            </p>
          ) : (
            <p className="login-toggle">
              Crear una cuenta{" "}
              <span onClick={() => setCurrentState("Entrar")}>click aquí</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
