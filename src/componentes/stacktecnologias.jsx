export default function StackTecnologias() {
  const tecnologias = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "Python",
  ];

  const getColor = (tec) => {
    if (tec === "React") return "lightblue";
    if (tec === "JavaScript") return "yellow";
    if (tec === "Node.js") return "lightgreen";
    if (tec === "Python") return "orange";
    if (tec === "MongoDB") return "lightseagreen";
    if (tec === "MySQL") return "lightsalmon";

    return "lightgray";
  };

  return (
    <section>
      <h2>Stack Tecnológico</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tecnologias.map((tec, index) => (
          <span
            key={index}
            style={{
              backgroundColor: getColor(tec),
              padding: "12px",
            }}
          >
            {tec}
          </span>
        ))}
      </div>
    </section>
  );
}
