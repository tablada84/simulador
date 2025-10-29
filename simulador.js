// 🏪 Super MarketSports

alert("Bienvenido/a a Super MarketSports 🏄‍♂️🚴‍♀️");

// 🧩 1. Array de productos
const productos = [
  { id: 1, nombre: "tabla de surf", precio: 500 },
  { id: 2, nombre: "casco", precio: 100 },
  { id: 3, nombre: "bike", precio: 200 },
  { id: 4, nombre: "monopatin", precio: 400 },
  { id: 5, nombre: "rollers", precio: 200 },
];

// 🛒 2. Carrito vacío
let carrito = [];

// 🧠 3. Preguntar si el usuario quiere comprar
let seleccion = prompt("¿Desea comprar algún producto? (si o no)").toLowerCase();

// Validación de respuesta
while (seleccion !== "si" && seleccion !== "no") {
  alert("Por favor, ingrese 'si' o 'no'.");
  seleccion = prompt("¿Desea comprar algún producto? (si o no)").toLowerCase();
}

// 🏷️ 4. Mostrar productos si responde "si"
if (seleccion === "si") {
  alert("A continuación, nuestra lista de productos:");
  
  const listaProductos = productos
    .map((producto) => `${producto.nombre} - $${producto.precio}`)
    .join(" | ");
  
  alert(listaProductos);
} else {
  alert("Gracias por venir, ¡hasta pronto!");
}

// 🛍️ 5. Bucle de compra
while (seleccion === "si") {
  // Solicitar producto
  const nombreProducto = prompt("Ingrese el nombre del producto que desea agregar:").toLowerCase();
  
  // Buscar producto
  const productoEncontrado = productos.find(
    (producto) => producto.nombre.toLowerCase() === nombreProducto
  );

  // Si existe, agregar al carrito
  if (productoEncontrado) {
    const unidades = parseInt(prompt(`¿Cuántas unidades de "${productoEncontrado.nombre}" desea llevar?`));
    
    if (!isNaN(unidades) && unidades > 0) {
      carrito.push({ ...productoEncontrado, unidades });
      alert(`${unidades} ${productoEncontrado.nombre}(s) agregado(s) al carrito.`);
    } else {
      alert("Por favor, ingrese un número válido de unidades.");
    }
  } else {
    alert("No tenemos ese producto.");
  }

  // Preguntar si quiere seguir comprando
  seleccion = prompt("¿Desea seguir comprando? (si o no)").toLowerCase();

  while (seleccion !== "si" && seleccion !== "no") {
    alert("Por favor, ingrese 'si' o 'no'.");
    seleccion = prompt("¿Desea seguir comprando? (si o no)").toLowerCase();
  }
}

// 💵 6. Mostrar resumen y total
if (carrito.length > 0) {
  alert("Gracias por su compra. Aquí está el detalle:");

  carrito.forEach((item) => {
    alert(
      `Producto: ${item.nombre}\nUnidades: ${item.unidades}\nSubtotal: $${item.unidades * item.precio}`
    );
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
  alert(`El total a pagar es: $${total}`);
} else {
  alert("No realizó ninguna compra. ¡Vuelva pronto!");
}