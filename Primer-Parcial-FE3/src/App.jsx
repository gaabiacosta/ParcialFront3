import { useState } from "react";
import Form from "./components/Form";
import ListaPedidos from "./components/ListaPedidos";
import "./App.css";

function App() {
  const [lista, setLista] = useState([]);

  function manejarSubmit(pedido) {
    setLista([pedido, ...lista]);
  }
  function manejarDelete(pedido) {
    //RECIBE DE ListaPedidos EL PEDIDO QUE EJECUTA EL EVENTO ON CLICK
    setLista(lista.filter((e) => e !== pedido));
    console.log('Se borro el pedido ' + pedido)
  }
  return (
    <>
      <Form onPedido={manejarSubmit} />
      <ListaPedidos manejarDelete={manejarDelete} pedidos={lista} />
    </>
  );
}

export default App;
