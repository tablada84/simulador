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
modoButton.className ="modo-button-header";

modoButton.addEventListener("click", ()=>{
    modoContenedor.style.display = "none"
})

modoHeader.append(modoButton)

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

   

/* Creando boton eliminar*/
    let eliminar = document.createElement("span")
    eliminar.innerText = "x"
    eliminar.className = "delete-product"
    carritoContent.append(eliminar)

    eliminar.addEventListener("click", eliminarProducto)
})

const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad, 0);

const totalPro = document.createElement("div")
totalPro.className = "total-content";
totalPro.innerHTML = `
total a pagar: ${total} $`;
modoContenedor.append(totalPro)



}

verCarrito.addEventListener("click", pintarCcarrito)

const eliminarProducto = ()=>{
    const foundId = carrito.find((element)=> element.id)

    carrito = carrito.filter((carritoId)=>{
        return carritoId !== foundId;
    })
    carritoCounter()
    pintarCcarrito()
}

const carritoCounter =()=>{
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText=carrito.length;
}