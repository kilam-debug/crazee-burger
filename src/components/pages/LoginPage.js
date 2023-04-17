import { useState } from "react";

export default function LoginPage() {
  // State état ou données
  const [inputValue, setInputValue] = useState("bob");

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
    <div>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handelSubmit}>
        <input
          value={inputValue}
          onChange={handelChange}
          type="text"
          placeholder="Entrez votre prenom ..."
          required
        />
        <button>Accédez àvotre espace</button>
      </form>
    </div>
  );
}
