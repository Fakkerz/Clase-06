// Definición del objeto Producto
function Producto(items) {
    this.items = items;
  
    // Método para calcular el total de la compra
    this.totalDeCompra = function () {
      let subtotal = 0;
  
      for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i];
        subtotal += item.precioUnitario * item.cantidad;
      }
  
      return subtotal.toFixed(2); // Redondear el subtotal a 2 decimales
    };
  }
  
  // Creación del array de objetos con los productos
  let productos = [];
  
  // Función para manejar el envío del formulario
  function agregarProducto(event) {
    event.preventDefault();
  
    // Obtener los valores ingresados por el usuario
    let codigo = document.getElementById('codigo').value;
    let producto = document.getElementById('producto').value;
    let precioUnitario = parseFloat(document.getElementById('precio').value);
    let cantidad = parseInt(document.getElementById('cantidad').value);
  
    // Crear un nuevo objeto de producto
    let nuevoProducto = {
      codigo: codigo,
      producto: producto,
      precioUnitario: precioUnitario,
      cantidad: cantidad
    };
  
    // Agregar el nuevo producto al array de productos
    productos.push(nuevoProducto);
  
    // Limpiar los campos del formulario
    document.getElementById('codigo').value = '';
    document.getElementById('producto').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('cantidad').value = '';
  
    // Actualizar la lista de productos y el total a pagar
    actualizarInterfaz();
  }
  
  // Función para editar un producto
  function editarProducto(index) {
    // Obtener el producto a editar del array de productos
    let producto = productos[index];
  
    // Establecer los valores del producto en los campos del formulario
    document.getElementById('codigo').value = producto.codigo;
    document.getElementById('producto').value = producto.producto;
    document.getElementById('precio').value = producto.precioUnitario;
    document.getElementById('cantidad').value = producto.cantidad;
  
    // Eliminar el producto del array de productos
    productos.splice(index, 1);
  
    // Actualizar la lista de productos y el total a pagar
    actualizarInterfaz();
  }
  
  // Función para eliminar un producto
  function eliminarProducto(index) {
    // Eliminar el producto del array de productos
    productos.splice(index, 1);
  
    // Actualizar la lista de productos y el total a pagar
    actualizarInterfaz();
  }
  
// Función para actualizar la interfaz con los resultados
function actualizarInterfaz() {
    let listaProductos = document.getElementById('lista-productos');
    let totalPagar = document.getElementById('total-pagar');
  
    // Ordenar el array de productos de menor a mayor según el código
    productos.sort(function(a, b) {
      return a.codigo.localeCompare(b.codigo);
    });
  
    // Limpiar la lista de productos
    listaProductos.innerHTML = '';
  
    // Recorrer el array de productos y mostrar cada uno en la lista
    productos.forEach(function(item, index) {
      let li = document.createElement('li');
      li.textContent =
        item.codigo +
        ' - ' +
        item.producto +
        ' - Cantidad: ' +
        item.cantidad +
        ' - Precio unitario: $' +
        item.precioUnitario.toFixed(2);
  
      // Crear botón para editar el producto
      let editarButton = document.createElement('button');
      editarButton.textContent = 'Editar';
      editarButton.addEventListener('click', function() {
        editarProducto(index);
      });
      li.appendChild(editarButton);
  
      // Crear botón para eliminar el producto
      let eliminarButton = document.createElement('button');
      eliminarButton.textContent = 'Eliminar';
      eliminarButton.addEventListener('click', function() {
        eliminarProducto(index);
      });
      li.appendChild(eliminarButton);
  
      listaProductos.appendChild(li);
    });
  
    // Crear una instancia del objeto Producto con el array de productos
    let producto = new Producto(productos);
  
    // Calcular el total a pagar
    let totalAPagar = producto.totalDeCompra();
  
    // Mostrar el total a pagar
    totalPagar.textContent = '$' + totalAPagar;
  }
  
  // Obtener referencia al formulario
  let formulario = document.getElementById('formulario');
  
  // Agregar un event listener al formulario para manejar su envío
  formulario.addEventListener('submit', agregarProducto);
