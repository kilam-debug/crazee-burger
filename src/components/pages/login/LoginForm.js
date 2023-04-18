import React from "react";
import { useState } from "react";

export default function LoginForm() {
  // State état ou données
  const [inputValue, setInputValue] = useState("");

  // comportements
  const handelSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handelChange = (event) => {
    setInputValue(event.target.value);
  };

  // affichage (render)
  return (
    <form action="submit" onSubmit={handelSubmit}>
      <h1>Bienvenue chez nous</h1>
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
