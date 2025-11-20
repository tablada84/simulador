

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

let carrito = []

productos.forEach((product)=>{
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
const repetir = carrito.some((repetirProducto)=> repetirProducto.id ===product.id)

if(repetir){
    carrito.map((prod)=>{
        if(prod.id ===  product.id){
            prod.cantidad++;
        }
    })
}else{ 


    carrito.push({
        nombre:product.nombre,
        precio:product.precio,
        id:product.id,
        img:product.img,
        cantidad:product.cantidad,
    })
}
    console.log(carrito)
    carritoCounter();
})
})
