export default function Habilidades() {
  const habilidades = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git y GitHub",
    "Node.js básico",
    "Trabajo en equipo",
    "Comunicación asertiva",
    "Resolución de problemas",
    "Aprendizaje autónomo",
  ];

  return (
    <section>
      <h2>Habilidades</h2>

      <ul>
        {habilidades.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
