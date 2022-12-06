// VARIABLES
// ARRAY DE PRODCUTOS
const allProductos = [
  auri1,
  auri2,
  auri3,
  auri4,
  auri5,
  auri6,
  auri7,
  auri8,
  peri1,
  peri2,
  peri3,
  peri4,
  peri5,
  peri6,
  peri7,
  peri8,
  peri9,
  moni1,
  moni2,
  moni3,
  moni4,
  moni5,
  cpu1,
  cpu2,
  cpu3,
  cpu4,
  cpu5,
  note1,
  note2,
  note3,
  note4,
];
// ARRAY DE CARRITO
let carrito = [];
const divisa = "$";

// QUERY DE ELEMENTOS
const DOMitems = document.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#boton-vaciar");
const DOMbotonPagar = document.querySelector("#boton-pagar");
const DOMsearch = document.querySelector("#search");
const miLocalStorage = window.localStorage;

// FUNCIONES

//renderizar todos los productos
function renderizarProductos(array) {
  DOMitems.innerHTML = ""
  array.forEach((info) => {
    const miNodo = document.createElement("div");
    miNodo.classList.add("card", "col-md-5","col-xl-3");
    const miNodoCardBody = document.createElement("div");
    miNodoCardBody.classList.add("card-body");
    const miNodoTitle = document.createElement("h5");
    miNodoTitle.classList.add("card-title");
    miNodoTitle.textContent = info.descripcion;
    const miNodoImagen = document.createElement("img");
    miNodoImagen.classList.add("img-fluid");
    miNodoImagen.setAttribute("src", info.img);
    const miNodoPrecio = document.createElement("p");
    miNodoPrecio.classList.add("card-text");
    miNodoPrecio.textContent = `PRECIO: ${divisa}${info.precio}`;
    const miNodoBoton = document.createElement("button");
    miNodoBoton.classList.add("btn", "btn-primary");
    miNodoBoton.textContent = "AGREGAR AL CARRITO";
    miNodoBoton.setAttribute("data-id", info.id);
    miNodoBoton.addEventListener("click", anyadirProductoAlCarrito);
    miNodoCardBody.appendChild(miNodoImagen);
    miNodoCardBody.appendChild(miNodoTitle);
    miNodoCardBody.appendChild(miNodoPrecio);
    miNodoCardBody.appendChild(miNodoBoton);
    miNodo.appendChild(miNodoCardBody);
    DOMitems.appendChild(miNodo);
  });
}

//añadimos un producto al carrito de la compra
function anyadirProductoAlCarrito(evento) {
  carrito.push(evento.target.getAttribute("data-id"));
  Toastify({
    text: "Prodcuto añadido al carrito de compra",
    duration: 1500,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "green",
    },
    onClick: function () { }, // Callback after click
  }).showToast();
  renderizarCarrito();
  guardarCarritoEnLocalStorage();
}

//Renderizar todos los productos guardados en el carrito
function renderizarCarrito() {
  DOMcarrito.textContent = "";
  const carritoSinDuplicados = [...new Set(carrito)];
  carritoSinDuplicados.forEach((item) => {
    const miItem = allProductos.filter((itemBaseDatos) => {
      return itemBaseDatos.id == parseInt(item);
    });
    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
      return itemId === item ? (total += 1) : total;
    }, 0);
    const miNodo = document.createElement("li");
    miNodo.classList.add("list-group-item", "text-right", "mx-2");
    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].descripcion} - ${divisa} ${miItem[0].precio}`;
    const miBoton = document.createElement("button");
    miBoton.classList.add("btn", "btn-danger", "mx-5");
    miBoton.textContent = "ELIMINAR";
    miBoton.style.marginLeft = "2rem";
    miBoton.dataset.item = item;
    miBoton.addEventListener("click", borrarItemCarrito);
    miNodo.appendChild(miBoton);
    DOMcarrito.appendChild(miNodo);
  });
  DOMtotal.textContent = calcularTotal();
}

//borrar un elemento del carrito

function borrarItemCarrito(evento) {
  const id = evento.target.dataset.item;
  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });
  renderizarCarrito();
  guardarCarritoEnLocalStorage();
}

//calcular el total del carrito
function calcularTotal() {
  return carrito.reduce((total, item) => {
    const miItem = allProductos.filter((itemBaseDatos) => {
      return itemBaseDatos.id == parseInt(item);
    });
    return total + miItem[0].precio;
  }, 0);
}

//vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  renderizarCarrito();
  localStorage.clear();
}

//guardar el carrito en localstorage
function guardarCarritoEnLocalStorage() {
  miLocalStorage.setItem("carrito", JSON.stringify(carrito));
}

//cargar el carrito desde localstorage si existe
function cargarCarritoDeLocalStorage() {
  if (miLocalStorage.getItem("carrito") !== null) {
    carrito = JSON.parse(miLocalStorage.getItem("carrito"));
  }
}

//pagar carrito de compras
function pagar() {
  Swal.fire({
    title: "COMPLETA PARA TERMINAR TU COMPRA",
    html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre completo">
    <input type="email" id="email" class="swal2-input" placeholder="E-mail">
    <input type="text" id="direccion" class="swal2-input" placeholder="Direccion de envio">
    <input type="number" id="altura" class="swal2-input" placeholder="altura">
    <input type="number" id="tarjeta" class="swal2-input" placeholder="Numero de tarjeta">`,
    confirmButtonText: "CONFIRMAR PEDIDO",
    focusConfirm: false,
    preConfirm: () => {
      const nombre = Swal.getPopup().querySelector("#nombre").value;
      const email = Swal.getPopup().querySelector("#email").value;
      const direccion = Swal.getPopup().querySelector("#direccion").value;
      const altura = Swal.getPopup().querySelector("#altura").value;
      const tarjeta = Swal.getPopup().querySelector("#tarjeta").value;
      const operacion = Math.floor(Math.random() * 10);
      if (!nombre || !email || !direccion || !altura || !tarjeta) {
        Swal.showValidationMessage(
          `Porfavor completa todos los pedidos para confirmar tu pedido`
        );
      }
      return {
        nombre: nombre,
        email: email,
        direccion: direccion,
        altura: altura,
        tarjeta: tarjeta,
        operacion: operacion,
      };
    },
  }).then((result) => {
    Swal.fire(
      `
      Querido/a  ${result.value.nombre.toUpperCase()}, gracias por realizar tu compra. 


      Te llegara la factura al mail registrado:

       ${result.value.email.toUpperCase()}


      Direccion de envio:

       ${result.value.direccion.toUpperCase()} ${result.value.altura.toUpperCase()}


      NUMERO DE OPERACION : ${result.value.operacion}
      

      TU PEDIDO LLEGARA DENTRO 10 DIAS HABILES 
    `.trim()
    );
  });
  vaciarCarrito();
}

//EVENTLISTENERS EventListeners
DOMbotonVaciar.addEventListener("click", vaciarCarrito);
DOMbotonPagar.addEventListener("click", pagar);
DOMsearch.addEventListener("keyup", (event) =>{
  const buscador = event.target.value;
  console.log(buscador);
  const productoFiltrado = allProductos.filter(producto => producto.descripcion.toLowerCase().includes(buscador.toLowerCase()));
  console.log(productoFiltrado);
  renderizarProductos(productoFiltrado)

} );

//EJECUCIONES
cargarCarritoDeLocalStorage();
renderizarProductos(allProductos);
renderizarCarrito();
