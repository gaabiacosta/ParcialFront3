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
    <>
      <h1>CUAL ES TU COMIDA FAVORITA?</h1>
      <Form onPedido={manejarSubmit} />
      {pedido ? (
        <Card
          nombre={pedido.nombre}
          comidaFav={pedido.comidaFav}
          onDelete={manejarDelete}
        />
      ) : undefined}
    </>
  );
}

export default App;
