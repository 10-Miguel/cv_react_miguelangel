export default function Experiencia() {
  const experiencias = [
    {
      cargo: "Desarrollador Front-End Jr.",
      empresa: "Tech Solutions",
      año: "2023",
      descripcion:
        "Desarrollo de interfaces en React y mantenimiento de componentes UI con JavaScript.",
    },
    {
      cargo: "Asistente Administrativo",
      empresa: "Empresa XYZ",
      año: "2022",
      descripcion:
        "Gestión documental, atención al cliente y soporte administrativo general.",
    },
    {
      cargo: "Proyecto Personal: API REST",
      empresa: "Proyecto Propio",
      año: "2024",
      descripcion:
        "Creación de API REST con Node.js, Express y conexión a MySQL.",
    },
    {
      cargo: "Proyecto: Página Web Landing Page",
      empresa: "Freelance",
      año: "2024",
      descripcion:
        "Diseño responsivo usando HTML, CSS y animaciones con JavaScript.",
    },
    {
      cargo: "Desarrollador Web en prácticas",
      empresa: "DigitalSoft",
      año: "2023",
      descripcion: "Corrección de bugs y optimización de componentes en React.",
    },
    {
      cargo: "Soporte Técnico",
      empresa: "ColombiaTech",
      año: "2021",
      descripcion:
        "Instalación de software, soporte a usuarios y manejo de incidencias.",
    },
    {
      cargo: "Proyecto: Sistema de Inventarios",
      empresa: "Proyecto Académico",
      año: "2024",
      descripcion:
        "Sistema CRUD con JavaScript, JSON local y estilos con CSS Grid.",
    },
    {
      cargo: "Desarrollador Freelance",
      empresa: "Cliente Independiente",
      año: "2024",
      descripcion:
        "Creación de una mini tienda online con carrito hecho en JavaScript.",
    },
    {
      cargo: "Proyecto: Simulador de cafetería",
      empresa: "Proyecto Personal",
      año: "2023",
      descripcion:
        "Aplicación web creada para practicar lógica con JavaScript.",
    },
    {
      cargo: "Auxiliar de Datos",
      empresa: "Logística Express",
      año: "2020",
      descripcion:
        "Ingreso de información, validación de datos y apoyo en procesos de bodega.",
    },
  ];

  return (
    <div>
      <h2>Experiencia</h2>

      {experiencias.map((exp, index) => (
        <div key={index}>
          <h3>
            {exp.cargo} – {exp.empresa} ({exp.año})
          </h3>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </div>
  );
}
