import { useState } from "react";

import {
  experienciasData,
  educacionData,
  tecnologiasData,
  habilidadesData,
} from "./cvData";

import Experiencia from "./componentes/experiencia";
import Educacion from "./componentes/educacion";
import Tecnologias from "./componentes/tecnologias";
import Habilidades from "./componentes/habilidades";
import ToggleHabilidades from "./componentes/ToggleHabilidades";

function App() {
  const [experiencias, _setExperiencias] = useState(experienciasData);
  const [educacion, _setEducacion] = useState(educacionData);
  const [tecnologias, _setTecnologias] = useState(tecnologiasData);
  const [habilidades, _setHabilidades] = useState(habilidadesData);

  return (
    <main>
      <h1>Mi Hoja de Vida</h1>

      <Experiencia experiencias={experiencias} />
      <Educacion estudios={educacion} />
      <Tecnologias tecnologias={tecnologias} />
      <ToggleHabilidades Habilidades={habilidades} />
    </main>
  );
}

export default App;
