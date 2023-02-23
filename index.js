import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Mensaje() {
  const [mensaje, setMensaje] = useState("");

  return (
    <>
      <input onChange={(e) => setMensaje(e.target.value)} />

      <button
        onClick={() => {
          alert("Este es el mensaje: " + mensaje);
        }}
      >
        save
      </button>
    </>
  );
}

root.render(
  <>
    <Mensaje />
  </>
);
