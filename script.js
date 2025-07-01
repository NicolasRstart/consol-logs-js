const pedido = {
  id: 1023,
  cliente: "Ana Martínez",
  direccion: "Calle Falsa 123",
  items: ["Pizza Margarita", "Coca-Cola 500ml"],
  estado: "pendiente"
};

console.log("Nuevo pedido recibido:");
console.log(pedido);


pedido.estado = "preparando";
console.log(`Pedido #${pedido.id} está siendo preparado.`);


const tiempoEstimado = 25;
console.log(`Tiempo estimado de entrega: ${tiempoEstimado} minutos.`);


pedido.estado = "en camino";
console.log(`Pedido #${pedido.id} está en camino hacia ${pedido.direccion}.`);


pedido.estado = "entregado";
console.log(`Pedido #${pedido.id} fue entregado con éxito a ${pedido.cliente}.`);