import { useState } from "react";
import Habilidades from "./habilidades";

export default function ToggleHabilidades({ habilidades }) {
  const [visible, setVisible] = useState(true);

  const manejarClick = () => {
    setVisible(!visible);
  };

  return (
    <section>
      <h2>Habilidades</h2>

      <button onClick={manejarClick}>
        {visible ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>

      {visible && <Habilidades habilidades={habilidades} />}
    </section>
  );
}
