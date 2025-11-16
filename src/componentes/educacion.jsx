export default function Educacion() {
  const estudios = [
    {
      institucion: "Federico Sierra Arango",
      nivel: "Primaria",
      fecha: "2017",
    },
    {
      institucion: "Federico Sierra Arango",
      nivel: "Secundaria",
      fecha: "2018 - 2024",
    },
    {
      institucion: "SENA",
      nivel: "Auxiliar Administrativo",
      fecha: "2023 - 2024",
    },
    {
      institucion: "SENA",
      nivel: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
      fecha: "2025 - Presente",
    },
  ];

  return (
    <section>
      <h2>Educación</h2>

      <ul>
        {estudios.map((item, index) => (
          <li key={index}>
            <strong>{item.institucion}</strong> — {item.nivel} ({item.fecha})
          </li>
        ))}
      </ul>
    </section>
  );
}
