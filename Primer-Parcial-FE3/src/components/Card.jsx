/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

export default function Card({ nombre, comidaFav, onDelete }) {
  return (
    <>
      <div className={styles.caja}>
        <p className="">
          La comida favorita de {nombre} es: {comidaFav}
        </p>
        <button className={styles.boton} onClick={() => onDelete()}>
          {" "}
          X{" "}
        </button>
      </div>
    </>
  );
}
