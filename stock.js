// Constructor de Productos
function Producto(codigo, descripcion, stock, precioUnitario) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.stock = stock;
    this.precioUnitario = precioUnitario;
  }
  
  // Array para almacenar los productos
  let productos = [];
  
  // Función para dar de alta un nuevo producto
  function darDeAltaProducto() {
    
    let codigo, descripcion, stock, precioUnitario
    do {
        codigo = prompt("Ingrese el código del producto:")
      } while (codigo !== null && codigo.trim() == "" && /^[a-zA-Z0-9]+$/.test(codigo)) // No Null - No Blnk Spaces - No Letras
      
    do {
        descripcion = prompt("Ingrese la descripción del producto:")
    } while (descripcion !== null && descripcion.trim() == "" && !/^[a-zA-Z0-9]+$/.test(descripcion)) // No Null - No Blnk Spaces - No Letras

    do {
        stock = parseInt(prompt("Ingrese el stock del producto:"))
    } while (stock !== null && stock.trim() !== "" && Number.isInteger(Number(stock)))

    do {
        precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto:"))        
    } while (precioUnitario !== null && precioUnitario.trim() !== "" && Number.isInteger(Number(precioUnitario)))

    let nuevoProducto = new Producto(codigo, descripcion, stock, precioUnitario);
    productos.push(nuevoProducto);
  
    console.log("Nuevo producto agregado:", nuevoProducto);
    console.table(productos);  }
  
  // Ejecutar la función para dar de alta un nuevo producto
  darDeAltaProducto();
  

{}