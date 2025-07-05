//URL base de la API
const API_URL="http://localhost:8080/productos";

document.addEventListener('DOMContentLoaded', cargarProductosTienda);
document.addEventListener('DOMContentLoaded', obtenerProductos);
document.addEventListener('DOMContentLoaded', cargarCarrito);




// Constante para el IVA
const IVA = 0.21;  // 21% de IVA


 

function cargarProductosTienda(){
    var tbody = document.querySelector("#tblTiendaProductos tbody");        
    fetch(API_URL)
    .then(response => response.json())
    .then(productos => {
        // Actualizar el DOM con la lista de productos
        
        tbody.innerHTML="";
        if(Object.keys(productos).length==0){
            tbody.innerHTML='<tr><td colspan="4" style="text-align: center;">No se encontraron registros</td></tr>';
        } else {
            for (var producto of productos) 
            {
                var row = tbody.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);

                cell1.innerHTML=producto.nombre;
                cell2.innerHTML=producto.precio;
                cell3.innerHTML=producto.cantidadEnStock;
                cell4.innerHTML="<a href='#' onclick='agregarAlCarrito("+producto.id+")'>Añadir al carrito</a>";
            }
        }        
    })
    .catch(error => console.error(error));
}

function vaciarTabla(){
    var tbody = document.querySelector("#tblProductos tbody");
    tbody.innerHTML='<tr><td colspan="5" style="text-align: center;">No se encontraron registros</td></tr>';
}

function obtenerProductos(){
    fetch(API_URL)
    .then(response => response.json())
    .then(productos => {
    // Actualizar el DOM con la lista de productos
        cargaProductosInicial(productos);
    })
    .catch(error => console.error(error));
    
}


function mostrarProductosEnLaPantalla(productos){

}

function agregarProductoTabla(tbody, producto){
    var row = tbody.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML=producto.id;
    cell2.innerHTML=producto.nombre;
    cell3.innerHTML=producto.categoria;
    cell4.innerHTML=producto.cantidadEnStock;
    cell5.innerHTML=producto.precio;
    cell6.innerHTML="<a href='#' onclick='eliminarProducto("+producto.id+")'>Eliminar</a> <a href='#' onclick='editarProducto("+producto.id+")'>Editar</a>";
}

function cargaProductosInicial(productos){
    var tbody = document.querySelector("#tblProductos tbody");
    tbody.innerHTML="";
    if(Object.keys(productos).length==0){
        tbody.innerHTML='<tr><td colspan="5" style="text-align: center;">No se encontraron registros</td></tr>';
    } else {
        for (var producto of productos) 
        {
            agregarProductoTabla(tbody, producto);
        }
    }
    
}

function agregarProducto(){
    // Mostrar modal de checkout
    const modal = document.getElementById('agregar-producto-modal');
    modal.style.display = 'flex';

    
}

function cancelarAgregadoProducto(){
    const modal = document.getElementById('agregar-producto-modal');
    modal.style.display = 'none';
}

function resetCamposAgregarProducto(){
    document.getElementById('nombre').value="";
    document.getElementById('categoria').value="";
    document.getElementById('cantidadEnStock').value=null;
    document.getElementById('precio').value=null;
    
}

function confirmarAgregadoProducto(){
    var nombre = document.getElementById('nombre').value;
    var categoria = document.getElementById('categoria').value;
    var cantidadEnStock = document.getElementById('cantidadEnStock').value;
    var precio = document.getElementById('precio').value;
    var producto = { "nombre": nombre, "categoria": categoria, "precio": precio, "cantidadEnStock": cantidadEnStock }
    postData(producto);
    

    
    
    const modal = document.getElementById('agregar-producto-modal');
    modal.style.display = 'none';
    
    
    
    


    
}



function postData(producto) {
  
        
            fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(producto),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json())
            .then(producto => {
                // if (!response.ok) {
                // throw new Error(`Response status: ${response.status}`);
                // }
                console.log("Producto agregado");
                vaciarTabla();
                obtenerProductos();
                resetCamposAgregarProducto();
            })
            .catch(error => console.error(error));
             
            
          
}

function eliminarProducto(productoId){
        // Mostrar modal de checkout
        //const modal = document.getElementById('agregar-producto-modal');
        //modal.style.display = 'flex';
        fetch('http://localhost:8080/productos/'+productoId, {
        method: "DELETE"
    })
    .then(response => {
    // Actualizar el DOM con la lista de productos

        //console.log(response);
        vaciarTabla();
        obtenerProductos();
    })
    .catch(error => console.error(error));
    }

    function editarProducto(productoId){
        
        // Mostrar modal de checkout
        //alert("editar");

        fetch("http://localhost:8080/productos/"+productoId)
            .then(response => response.json())
            .then(producto => {
            // Actualizar el DOM con la lista de productos
                //cargaProductosInicial(productos);
                document.getElementById('EditarProductoId').value=producto.id;
                document.getElementById('EditarProductoNombre').value=producto.nombre;
                document.getElementById('EditarProductoCategoria').value=producto.categoria;
                document.getElementById('EditarProductoCantidadEnStock').value=producto.cantidadEnStock;
                document.getElementById('EditarProductoPrecio').value=producto.precio;
            })
            .catch(error => console.error(error));

        const modal = document.getElementById('editar-producto-modal');
        modal.style.display = 'flex';
    }

    function confirmarEditarProducto(){
        const productoId = document.getElementById('EditarProductoId').value;
        putData(productoId);               
        
        const modal = document.getElementById('editar-producto-modal');
        modal.style.display = 'none';
    }


    function cancelarEditarProducto(){

        
        const modal = document.getElementById('editar-producto-modal');
        modal.style.display = 'none';
    }

    function putData(productoId) {
        const url = "http://localhost:8080/productos/"+productoId;
        const nombre = document.getElementById('EditarProductoNombre').value;
        const categoria = document.getElementById('EditarProductoCategoria').value;
        const cantidadEnStock = document.getElementById('EditarProductoCantidadEnStock').value;
        const precio = document.getElementById('EditarProductoPrecio').value;
        //alert(JSON.stringify({ "nombre": nombre, "categoria": categoria, "precio": precio, "cantidadEnStock": cantidadEnStock }));
        
            fetch(url, {
                method: "PUT",
                body: JSON.stringify({ "nombre": nombre, "categoria": categoria, "precio": precio, "cantidadEnStock": cantidadEnStock }),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json())
            .then(producto => {
                
            vaciarTabla();
            obtenerProductos();
                return producto;
            })
            .catch(error => console.error(error));

            //  if (!response.ok) {
            //  throw new Error(`Response status: ${response.status}`);
            //  }
            
        
    }

    async function actualizarProducto(productoId,producto) {
        const url = "http://localhost:8080/productos/"+productoId;
        
        //alert(JSON.stringify({ "nombre": nombre, "categoria": categoria, "precio": precio, "cantidadEnStock": cantidadEnStock }));
        try {
            const response = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(producto),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
             if (!response.ok) {
             throw new Error(`Response status: ${response.status}`);
             }
             
             
            
        } catch (error) {
            console.error(error.message);
            //alert(error.message);
        }
    }

    function agregarAlCarrito(productoId) {
    
        // Obtener el producto de la bd        
        fetch("http://localhost:8080/productos/"+productoId)
        .then(response => response.json())
        .then(producto => {
            // Validar stock
            if (producto.cantidadEnStock <= 0) {
                alert('¡Producto agotado!');
                return;
            }    
            
            // Obtener el carrito actual del localStorage
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // Agregar nuevo producto
            carrito.push({ 
                productoKey: producto.id,
                nombre: producto.nombre, 
                precio: producto.precio
            });

            //restar stock y guardarlo en la base
            producto.cantidadEnStock--;
            actualizarProducto(productoId, producto);

            // Guardar en localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert("producto agregado");
            cargarCarrito();
            cargarProductosTienda();

            
        })
        .catch(error => console.error(error));
        // Actualizar vista del carrito
            
    }

    
function renderizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const subtotalCarrito = document.getElementById('subtotal-carrito');
    const descuentoCarrito = document.getElementById('descuento-carrito');
    const ivaCarrito = document.getElementById('iva-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Limpiar lista anterior
    listaCarrito.innerHTML = '';
    
    // Totales iniciales
    let subtotal = 0;
    let descuentoTotal = 0;
    // Renderizar cada producto
    carrito.forEach((producto, index) => {
        
        //const productoInfo = productos[producto.productoKey];
        const li = document.createElement('li');
           
        // Calcular descuento individual
        const descuentoProducto = 0;
        const precioConDescuento = producto.precio - descuentoProducto;
        
        
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio}             
        `;
        
        
        // Botón para eliminar producto
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
        
        // Sumar al subtotal y descuentos
        subtotal += producto.precio;
        descuentoTotal += descuentoProducto;
        
    });
    
    // Calcular IVA
    const IVA = 0.21;  // 21% de IVA   
    const ivaTotal = (subtotal - 0) * IVA;
    
    const total = subtotal - 0 + ivaTotal;
    //alert("ok"); 
    // Actualizar totales
    subtotalCarrito.textContent = subtotal.toFixed(2);
    descuentoCarrito.textContent = descuentoTotal.toFixed(2);
    ivaCarrito.textContent = ivaTotal.toFixed(2);
    totalCarrito.textContent = total.toFixed(2);
    
}

function vaciarCarrito() {
    // Restaurar stock de todos los productos
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.forEach((producto, index) => {
        fetch("http://localhost:8080/productos/"+producto.productoKey)
        .then(response => response.json())
        .then(producto => {            
            producto.cantidadEnStock++;
            actualizarProducto(producto.id, producto);
        })
        .catch(error => console.error(error));
        
    });

    alert("se ha vaciado el carrito");
    // Renderizar
    cargarCarrito();
    cargarProductosTienda();
        
    // Limpiar localStorage
    localStorage.removeItem('carrito');
    
    
}

function cargarCarrito() {
    // Cargar carrito al iniciar la página
    renderizarCarrito();
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var productoId = carrito[index].productoKey;

    fetch("http://localhost:8080/productos/"+productoId)
        .then(response => response.json())
        .then(producto => {
                
            
            // Obtener el carrito actual del localStorage
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            //cargo stock y guardarlo en la base
            producto.cantidadEnStock++;
            actualizarProducto(productoId, producto);

            // Eliminar producto por índice
            carrito.splice(index, 1);

            // Guardar en localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert("producto quitado del carrito");
            cargarCarrito();
            cargarProductosTienda();

            
        })
        .catch(error => console.error(error));
    
}