
//Array de productos


let container = document.getElementById("container");
let productos = [
    {id: 1, Nombre: "Tomate", Precio: 54},
    /* {id: 2, Nombre: "Aguacate", Precio: 18},
    {id: 3, Nombre: "Lechuga", Precio: 41},
    {id: 4, Nombre: "Pepino", Precio: 74},
    {id: 5, Nombre: "Chile", Precio: 10}, */
];

let Nombre = prompt("Ingrese el nombre del producto");
let Precio = prompt("Ingrese el precio del producto");

let altaProducto = {
    id: productos.length +1,
    Nombre: Nombre,
    Precio: Precio,
};
productos.push(altaProducto);



for(const producto of productos){
    let div = document.createElement("div");
    div.innerHTML = `
        <h5>ID: ${producto.id}</h5>
        <p>Producto: ${producto.Nombre}</p>
        <b>$${producto.Precio}</b>
    `;

    container.append(div);
}