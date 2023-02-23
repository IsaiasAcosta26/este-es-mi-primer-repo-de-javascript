const cardStyle = {
  background: "#202020",
  color: "rgb(255 255 255)",
  padding: "30px",
};

export function Estylos({ ready }) {
  return (
    <div style={cardStyle}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Hola este es mi primer Estilo
      </h1>

      <span> {ready ? "Tarea realizada" : "Tarea no realizada"}</span>
    </div>
  );
}
