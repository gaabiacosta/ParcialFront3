import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [pedido, setPedido] = useState("");

  function manejarSubmit(nombre, comidaFav) {
    setPedido({ nombre: nombre, comidaFav: comidaFav });
    console.log(pedido);
  }
  function manejarDelete() {
    setPedido("");
  }
  return (
    <div className="card">
      <h1>CUAL ES TU COMIDA FAVORITA? (¿Y por qué no la pizza?)</h1>
      <Form onPedido={manejarSubmit} />
      {pedido ? (
        <Card
          nombre={pedido.nombre}
          comidaFav={pedido.comidaFav}
          onDelete={manejarDelete}
        />
      ) : undefined}
    </div>
  );
}

export default App;
