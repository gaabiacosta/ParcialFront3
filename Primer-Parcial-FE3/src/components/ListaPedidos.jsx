import Pedido from "./Pedido";

export default function ListaPedidos({ manejarDelete, pedidos }) {
  return (
    <>
      <h1>PEDIDOS</h1>
        {/*RECIBE A TRAVÉS DE pedidos EL ARRAY CON LOS PEDIDOS DESDE LA APP*/}
      {pedidos.map((pedido) => (
        
        <Pedido pedido={pedido} onDelete={()=>manejarDelete(pedido)}/>
      ))}{/*ENVIA A TRAVÉS DE manejarDelete() EL PEDIDO A LA APP*/}
    </>
  );
}
