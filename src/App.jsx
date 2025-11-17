import CabeceraCV from "./componentes/cabeceracv";
import Perfil from "./componentes/perfil";
import Experiencia from "./componentes/experiencia";
import Educacion from "./componentes/educacion";
import Tecnologias from "./componentes/stacktecnologias";
import StackTecnologias from "./componentes/stacktecnologias";
export default function App() {
  return (
    <div>
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
      <StackTecnologias />
    </div>
  );
}
