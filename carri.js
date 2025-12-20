const pintarCcarrito=()=>{

modoContenedor.innerHTML ="";
modoContenedor.style.display ="flex"


    const modoHeader = document.createElement("div")

    modoHeader.className = "modo-header"
    modoHeader.innerHTML = `
    <h1 class="modo-header-title">tus compras</h1>
    `
modoContenedor.append(modoHeader)

const modoButton = document.createElement("h1")

modoButton.innerText="x"
modoButton.className =`"modo-button-header"`;

modoHeader.append(modoButton)
modoButton.addEventListener("click", ()=>{
    modoContenedor.style.display = "none"
})



carrito.forEach((product)=>{
    let carritoContent = document.createElement("div")

    carritoContent.className = "modo-content";
    carritoContent.innerHTML = `
    <img src = "${product.img}"
    <h3>${product.nombre}</h3>
    <p class="price">$${product.precio}</p>
    <span class = "restar">-</span>
    <p>Cantidad: ${product.cantidad}</p>
    <p>Total:${product.cantidad * product.precio}</p>
    <span class = "sumar">+</span>
    `

    modoContenedor.append(carritoContent)

    //Contador de productos, precio y cantidades

 let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      pintarCcarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      product.cantidad++;
      pintarCcarrito();
    });
   

/* Creando boton eliminar*/
    let eliminar = document.createElement("span")

    eliminar.className = "delete-product";
    eliminar.innerHTML = "🗑️"
   
    carritoContent.append(eliminar)

    eliminar.addEventListener("click", eliminarProducto)
})

//SUMNARIO DE PRODUCTOS Y CANTIDADES

const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad, 0);

const totalPro = document.createElement("span")
totalPro.className = "total-content";
totalPro.innerHTML = `
Total a pagar: ${total} $`;
modoContenedor.append(totalPro)

let finalizarComprar = document.createElement("button");

  finalizarComprar.className = "Finalizar-Compra";
  finalizarComprar.innerText = "Finalizar Compra";

  modoContenedor.append(finalizarComprar);
  const vaciarCarrito = document.createElement("button");
   vaciarCarrito.className = "Vaciar";
  vaciarCarrito.innerText = "Vaciar";

  modoContenedor.append(vaciarCarrito)
  vaciarCarrito.addEventListener("click", () => {
    carrito = [];
    shopContenido.innerHTML=""
    carritoCounter()
    Swal.fire({

      title: "EL carrito esta vacio!!",

    });;

})

  finalizarComprar.addEventListener("click", () => {
    modoContenedor.innerHTML = ""
    carrito = []
    carritoCounter()
    Swal.fire({

      title: "Gracias por su compra!!",
      text: "Esperamos por otra vuelta!!",
      footer: '<a href="#">Extreme Market</a>'
    });;

  });
};

verCarrito.addEventListener("click", pintarCcarrito)

const eliminarProducto = ()=>{
    const foundId = carrito.find((element)=> element.id)

    carrito = carrito.filter((carritoId)=>{
        return carritoId !== foundId;
    })
    carritoCounter()
    //saveLocal
    pintarCcarrito()
}

const carritoCounter =()=>{
    cantidadCarrito.style.display = "block";

    const carritoLength=carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText=JSON.parse(localStorage.getItem("carritoLength"))


}


carritoCounter()