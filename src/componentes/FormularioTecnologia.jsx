import { useState } from "react";

export default function FormularioTecnologia({ onAgregar }) {
  const [tecnologia, setTecnologia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página

    if (tecnologia.trim() === "") return;

    onAgregar(tecnologia); // envía la nueva tecnología al componente padre
    setTecnologia(""); // limpia el input después de enviar
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>Agregar nueva tecnología</h3>

      <input
        type="text"
        placeholder="Ingresa una tecnología"
        value={tecnologia}
        onChange={(e) => setTecnologia(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}
