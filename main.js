

const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modoContenedor = document.getElementById("modo-contenedor")
const cantidadCarrito = document.getElementById("cantidadCarrito")

const productos = [{
    
nombre: "tabla de surf",
precio:500,
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4zlE1jNTh43gz7F1-1Wxx3NuqbqydM0SIg&u",
id:1,
cantidad:1,
},
{nombre: "bmx",
precio:500,
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4zlE1jNTh43gz7F1-1Wxx3NuqbqydM0SIg&u",
id:2,
cantidad:1,
},
{ 
nombre: "scatebord",
precio:500,
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTtP-Nuh5uoHlEVKiw-8wAP8xQ_c8v3ulyg&us",
id:3,
cantidad:1
},
{ 
nombre: "roller",
precio:500,
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHooAFq7Gnu-HlN35uzrNeGW5scJpePeWYUA&us",
id:4,
cantidad:1,
},
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts= async()=>{

    const response = await fetch("data.json");
    const data = await response.json()
   data.forEach((product)=>{
    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = `
    <img src = "${product.img}"
    <h3>${product.nombre}</h3>
    <p class="price">$${product.precio}</p>`

    shopContent.append(content)

let Comprar = document.createElement("button")
Comprar.innerText = "comprar"
Comprar.className = "comprar"

content.append(Comprar)

Comprar.addEventListener("click", ()=>{
  Comprar.addEventListener("click", () => {

    const repetir = carrito.some((repetirProduct) => repetirProduct.id === product.id);
    repetir ? carrito.map((prod) => prod.id === product.id && prod.cantidad++) : carrito.push({
      id: product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,
      cantidad: product.cantidad,
      title: product.title,
    });


    console.log(carrito)
    console.log(carrito.length)
    carritoCounter();
    saveLocal()
})
})
})

}
getProducts()
data.forEach((product)=>{
    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = `
    <img src = "${product.img}"
    <h3>${product.nombre}</h3>
    <p class="price">$${product.precio}</p>`

    shopContent.append(content)

let Comprar = document.createElement("button")
Comprar.innerText = "comprar"
Comprar.className = "comprar"

content.append(Comprar)

Comprar.addEventListener("click", ()=>{
  Comprar.addEventListener("click", () => {

    const repetir = carrito.some((repetirProduct) => repetirProduct.id === product.id);
    repetir ? carrito.map((prod) => prod.id === product.id && prod.cantidad++) : carrito.push({
      id: product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,
      cantidad: product.cantidad,
      title: product.title,
    });


    console.log(carrito)
    console.log(carrito.length)
    carritoCounter();
    saveLocal()
})
})
})

const saveLocal=()=>{ 

localStorage.setItem("carrito", JSON.stringify(carrito))
}

JSON.parse(localStorage.getItem("carrito"))