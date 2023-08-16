/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Form({ onPedido }) {
  const [pedido, setPedido] = useState("");
  const [alerta, setAlerta] = useState("");

  function manejarSubmit(e) {
    e.preventDefault();
    if (pedido.trim() !== "") {
      setAlerta("El pedido fue creado");
      onPedido(pedido);
    } else {
      setAlerta("El pedido está vacío");
    }
  }

  return (
    <form onSubmit={manejarSubmit}>
      <label htmlFor="pedido">Pedido: </label>
      <input
        type="text"
        id="pedido"
        onChange={(e) => setPedido(e.target.value)}
        value={pedido}
      />
      <button type="submit">Submit</button>
      {alerta ? <div>{alerta}</div> : undefined}
    </form>
  );
}
