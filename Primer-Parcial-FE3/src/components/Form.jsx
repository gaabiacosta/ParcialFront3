/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Form({ onPedido }) {
  const [nombre, setNombre] = useState("");
  const [comidaFav, setComidaFav] = useState("");
  const [alerta, setAlerta] = useState("");

  function manejarSubmit(e) {
    e.preventDefault();
    if (nombre[0] === " ") {
      setAlerta("El nombre no puede comenzar con un espacio");
    } else if (nombre.length < 3) {
      setAlerta("El nombre debe tener más de 3 caracteres");
    } else if (comidaFav.length < 6) {
      setAlerta("La comida debe ser de al menos 6 caracteres");
    } else {
      setAlerta("Se agregó la comida correctamente");
      setNombre("");
      setComidaFav("");
      onPedido(nombre, comidaFav);
    }
  }

  return (
    <form onSubmit={manejarSubmit}>
      <label htmlFor="nombre">Nombre: </label>
      <input
        type="text"
        id="nombre"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />
      <label htmlFor="comidaFav">Comida favorita: </label>
      <input
        type="text"
        id="comidaFav"
        onChange={(e) => setComidaFav(e.target.value)}
        value={comidaFav}
      />
      <button type="submit">Submit</button>
      {alerta ? <div>{alerta}</div> : undefined}
    </form>
  );
}
