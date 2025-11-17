import { useState } from "react";

import {
  experienciasData,
  educacionData,
  tecnologiasData,
  habilidadesData,
} from "./cvData";

import Experiencia from "./componentes/experiencia";
import Educacion from "./componentes/educacion";
import Tecnologias from "./componentes/stacktecnologias";
import ToggleHabilidades from "./componentes/ToggleHabilidades";
import Habilidades from "./componentes/habilidades";
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
