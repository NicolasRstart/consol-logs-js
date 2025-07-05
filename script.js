
const encargo = {
  id: 1023,
  cliente: "Ana Martínez",
  direccion: "Calle Falsa 123",
  items: ["Pizza Margarita", "Coca-Cola 500ml"],
  estado: "pendiente"
};

function mostrarEncargo(e) {
  console.log("Nuevo encargo recibido:");
  console.log(`Cliente: ${e.cliente}`);
  console.log(`Dirección: ${e.direccion}`);
  console.log("Items solicitados:");
  for (let item of e.items) {
    console.log(`- ${item}`);
  }
  console.log(`Estado actual: ${e.estado}`);
}

function actualizarEstado(nuevoEstado) {
  encargo.estado = nuevoEstado;
  console.log(`Encargo #${encargo.id} ahora está: ${encargo.estado}`);
}

const confirmarEncargo = confirm("¿Deseas confirmar tu encargo?");
if (confirmarEncargo) {
  mostrarEncargo(encargo);

  actualizarEstado("preparando");
  alert("Tu encargo está siendo preparado.");

  const tiempoEstimado = 25;
  console.log(`Tiempo estimado de entrega: ${tiempoEstimado} minutos.`);

  actualizarEstado("en camino");
  alert(`Tu encargo está en camino hacia ${encargo.direccion}.`);

  actualizarEstado("entregado");
  alert(`¡Encargo entregado con éxito a ${encargo.cliente}!`);
} else {
  alert("El encargo fue cancelado.");
  console.log("Encargo cancelado por el usuario.");
}

const encargo2 = {
  id: 1023,
  cliente: "",
  direccion: "",
  items: [],
  estado: "pendiente"
};

function mostrarEncargo2(e) {
  console.log("Nuevo encargo recibido:");
  console.log(`Cliente: ${e.cliente}`);
  console.log(`Dirección: ${e.direccion}`);
  console.log("Items solicitados:");
  for (let item of e.items) {
    console.log(`- ${item}`);
  }
  console.log(`Estado actual: ${e.estado}`);
}

function actualizarEstado2(nuevoEstado) {
  encargo2.estado = nuevoEstado;
  console.log(`Encargo #${encargo2.id} ahora está: ${encargo2.estado}`);
}

encargo2.cliente = prompt("Ingrese su nombre:");
encargo2.direccion = prompt("Ingrese su dirección:");

let agregarMas = true;

while (agregarMas) {
  let nuevoItem = prompt("Ingrese un producto que desea pedir:");
  if (nuevoItem) {
    encargo2.items.push(nuevoItem);
  }

  agregarMas = confirm("¿Desea agregar otro producto?");
}

if (encargo2.items.length === 0) {
  alert("No se puede realizar un encargo sin productos. Encargo cancelado.");
  console.log("Encargo cancelado: sin productos.");
} else {
  const confirmarEncargo2 = confirm("¿Desea confirmar su encargo?");
  if (confirmarEncargo2) {
    mostrarEncargo2(encargo2);

    actualizarEstado2("preparando");
    alert("Tu encargo está siendo preparado.");

    const tiempoEstimado = 25;
    console.log(`Tiempo estimado de entrega: ${tiempoEstimado} minutos.`);

    actualizarEstado2("en camino");
    alert(`Tu encargo está en camino hacia ${encargo2.direccion}.`);

    actualizarEstado2("entregado");
    alert(`¡Encargo entregado con éxito a ${encargo2.cliente}!`);
  } else {
    alert("El encargo fue cancelado.");
    console.log("Encargo cancelado por el usuario.");
  }
}

//si le esto aviso es una simulacion nomas tengo planeado ver de implementarlo a mi proyecto
//de disño web la ide tiene de intecion con referencias de delibery pero admito no es un delivery
//si quiere ver el diseño a que lo voy a implementar pida me lo y se lo envio en la rentrega