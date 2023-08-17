/* eslint-disable react/prop-types */

export default function Card({ nombre, comidaFav, onDelete}) {
  return (
    <>
      <div>
        <p>La comida favorita de {nombre} es: {comidaFav}</p>
        <button onClick={() =>onDelete()}> X </button>
      </div>
    </>
  );
}
