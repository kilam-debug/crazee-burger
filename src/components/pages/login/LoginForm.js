import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  // State état ou données
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // comportements
  const handelSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handelChange = (event) => {
    setInputValue(event.target.value);
  };

  // affichage (render)
  return (
    <form action="submit" onSubmit={handelSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handelChange}
        type="text"
        placeholder="Entrez votre prenom ..."
        required
      />
      <button>Accédez àvotre espace</button>
    </form>
  );
}
