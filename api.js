/*fetch('https://fakestoreapi.com/products')
.then(resp=>{
    if(!resp.ok) throw new Error('Error en la solicitud');
    return resp.json();
})
.then(data =>{
    const contenedor = document.getElementById("productos2");
    data.forEach(productos2 =>{
        const div =document.createElement("div");
        div.className = 'productos2'
       
        div.innerHTML = `
        <img src = "${productos2.img}" alt = "${productos2.title}"
        <h3>${productos2.title}</h3>
        <p> ${productos2.description}</p>
        <p><strong> Precio:</strong> $${productos2.price}</p>
        <p><strong> Categoria:</strong> ${productos2.categoria}</p>`;

        contenedor.appendChild(div)
    })
})*/
//.catch(error =>{
    //console.error('error al obtener los productos2:', error)
//})
