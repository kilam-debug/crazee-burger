import { Link } from "react-router-dom";

export default function OrderPage() {
  return (
    <div>
      <h1>OrderPage</h1>
      <Link to="/">
        <button>Déconnection</button>
      </Link>
    </div>
  );
}