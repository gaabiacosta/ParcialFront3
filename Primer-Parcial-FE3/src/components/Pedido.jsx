/* eslint-disable react/prop-types */

export default function Pedido({ pedido, onDelete}) {
  return (
    <>
      <div>
        {/*RECIBE DE ListaPedidos EL PEDIDO*/}
        <p>{pedido}</p>
        {/*ENVIA QUE SE LE HIZO CLIC A ESTE EVENTO A ListaPedidos A TRAVÉS DE LA PROP onDelete*/}
        <button onClick={() =>onDelete()}> X </button>
      </div>
    </>
  );
}
