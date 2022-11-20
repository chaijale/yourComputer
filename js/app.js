// VARIABLES
// ARRAY DE PRODCUTOS
const allProductos = [auri1, auri2, auri3, auri4, auri5, auri6, auri7, auri8, peri1, peri2, peri3, peri4, peri5, peri6, peri7, peri8, peri9, moni1, moni2, moni3, moni4, moni5, cpu1, cpu2, cpu3, cpu4, cpu5, note1, note2, note3, note4,]
// ARRAY DE CARRITO
let carrito = [];
const divisa = '$';


// QUERY DE ELEMENTOS
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;



// FUNCIONES

//renderizar todos los productos
function renderizarProductos() {
  allProductos.forEach((info) => {
    const miNodo = document.createElement('div');
    miNodo.classList.add('card', 'col-sm-3');
    const miNodoCardBody = document.createElement('div');
    miNodoCardBody.classList.add('card-body');
    const miNodoTitle = document.createElement('h5');
    miNodoTitle.classList.add('card-title');
    miNodoTitle.textContent = info.descripcion;
    const miNodoImagen = document.createElement('img');
    miNodoImagen.classList.add('img-fluid');
    miNodoImagen.setAttribute('src', info.img);
    const miNodoPrecio = document.createElement('p');
    miNodoPrecio.classList.add('card-text');
    miNodoPrecio.textContent = `PRECIO: ${divisa}${info.precio}`;
    const miNodoBoton = document.createElement('button');
    miNodoBoton.classList.add('btn', 'btn-primary');
    miNodoBoton.textContent = 'AGREGAR AL CARRITO';
    miNodoBoton.setAttribute('data-id', info.id);
    miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
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
  carrito.push(evento.target.getAttribute('data-id'))
  renderizarCarrito();
  guardarCarritoEnLocalStorage();

}


//Renderizar todos los productos guardados en el carrito
function renderizarCarrito() {
  DOMcarrito.textContent = '';
  const carritoSinDuplicados = [...new Set(carrito)];
  carritoSinDuplicados.forEach((item) => {
    const miItem = allProductos.filter((itemBaseDatos) => {
      return itemBaseDatos.id == parseInt(item);
    });
    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
      return itemId === item ? total += 1 : total;
    }, 0);
    const miNodo = document.createElement('li');
    miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].descripcion} - ${divisa} ${miItem[0].precio}`;
    const miBoton = document.createElement('button');
    miBoton.classList.add('btn', 'btn-danger', 'mx-5');
    miBoton.textContent = 'ELIMINAR';
    miBoton.style.marginLeft = '2rem';
    miBoton.dataset.item = item;
    miBoton.addEventListener('click', borrarItemCarrito);
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
  miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

//cargar el carrito desde localstorage si existe
function cargarCarritoDeLocalStorage() {
  if (miLocalStorage.getItem('carrito') !== null) {
    carrito = JSON.parse(miLocalStorage.getItem('carrito'));
  }
}

//EVENTLISTENERS EventListeners
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

//EJECUCIONES
cargarCarritoDeLocalStorage();
renderizarProductos();
renderizarCarrito();

/*const renderizarProductos = () => {
  allProductos.forEach((producto) => {
    const productoCard = document.createElement('div');
    productoCard.className = 'card carta'
    productoCard.setAttribute('data-id', producto.id);
    productoCard.innerHTML = `
      <img src=" ${producto.img}" alt="${producto.descripcion}">
      <div class="card-body">
          <h5 class="card-title"><strong>PRECIO: $${producto.precio} </strong></h5>
          <span class="card-text">${producto.descripcion} </span>
          <button type="button" class="btn btn-primary">AGREGAR AL CARRITO</button>
      </div>`
    listaProductos.append(productoCard)
  })
  const botonProducto = document.querySelectorAll('.card-body')
  botonProducto.forEach((boton) => {
    boton.addEventListener('click', agregarCarrito)
  })
}


const agregarCarrito = (e) => {
  const idProducto = (e.target.closest('.card').getAttribute('data-id'));
  const productoElegido = allProductos.find((producto) => producto.id == idProducto)
  //console.log(productoElegido);

  carrito.push(productoElegido)
  console.log(carrito)
}



// EventListeners
//---------------




// Ejecuciones
//------------
renderizarProductos();




//Funcion para saludar al nuevo usuario
const saludar = (nombre) => {
  alert("Bienvenido " + nombre + " a YOURCOMPUTER, empecemos");
};

//Funcion para validar edad del usuario
const verificar = (edad) => {
  if (edad < 18) {
    alert("Necesitaras que un mayor valide tu compra");
  }
};

//Funcion para que el usuario selectocciones que tipo tipo de producto necesita
const seleccionProducto = (tipoProducto) => {
  while (
    tipoProducto != "monitores" &&
    tipoProducto != "perifericos" &&
    tipoProducto != "cpu" &&
    tipoProducto != "notebook" &&
    tipoProducto != "auriculares"
  ) {
    tipoProducto = prompt(
      "¿Que desea comprar? Opciones: monitores, perifericos, cpu, notebook,auriculares"
    ).toLowerCase();
    switch (tipoProducto) {
      case "monitores":
        alert(
          "Muy pronto tendremos disponibles monitores samsung, lg, aorus, hp"
        );
        break;
      case "perifericos":
        alert(
          "Muy pronto tendremos disponibles teclados y mouse con la mejor variedad"
        );
        break;
      case "cpu":
        alert(
          "Muy pronto tendremos disponibles la mejores cpu gammer del mercado"
        );
        break;
      case "notebook":
        alert("Muy pronto tendremos disponibles las mejores notebooks");
        break;
      case "auriculares":
        alert(
          "Muy pronto tendremos disponibles diferentes tipos de audiculares para cumplir tus necesidades"
        );
        break;
      default:
        alert("Opcion incorrecta, porfavor vuelva a intentarlo");
        break;
    }
  }
};
//funcion constructora de usuarios
function Usuario(nombre, constrasena, email, edad) {
  this.nombre = nombre;
  this.contrasena = constrasena;
  this.email = email;
  this.edad = edad;
}

const usuarios = [
  {
    nombre: 'martin',
    contrasena: '123',
    email: 'martin@yourcomputer.com',
    edad: 29,
  },
  {
    nombre: 'gonzalo',
    contrasena: '145',
    email: 'gonzalo@yourcomputer.com',
    edad: 32,
  },
  {
    nombre: 'florencia',
    contrasena: '456',
    email: 'florencia@yourcomputer.com',
    edad: 24,
  },
];

let user;
do {
  user = prompt("Bienvenido a YOURCOMPUTER. ¿Sos nuevo?").toLowerCase();
} while (user != "si" && user != "no");
if (user == 'si') {
  let nuevoUsuario = prompt("Porfavor ingresa tu nombre de usuario").toLowerCase();
  let verificador = usuarios.some((nombre) => nombre.nombre === nuevoUsuario);

  while (verificador == true) {
    alert("Usuario ya existente. Prueba con otro nombre");
    nuevoUsuario = prompt("Porfavor ingresa tu nombre de usuario").toLowerCase();
    verificador = usuarios.some((nombre) => nombre === nuevoUsuario);
  }

  let nuevaClave = prompt("Porfavor ingresa tu contrasena").toLowerCase();

  let nuevoEmail = prompt("Porfavor ingresa tu email").toLowerCase();
  verificador = false;
  verificador = usuarios.some((email) => email.email === nuevoEmail);
  while (verificador == true) {
    alert("Email ya existente. Prueba con otro correo");
    nuevoEmail = prompt("Porfavor ingresa tu email").toLowerCase();
    verificador = usuarios.some((email) => email.email === nuevoEmail);
  }

  let nuevaEdad = Number(prompt("Porfavor ingresa tu edad"));
  verificar(nuevaEdad);
  alert("Perfecto! ya fuiste cargado a nuestro sistema. A constinuacion ingresa con tus datos.");

  usuarios.push(new Usuario(nuevoUsuario, nuevaClave, nuevoEmail, nuevaEdad));
  console.log(usuarios)
}
user = prompt("Nombre de usuario: ");
let buscarUser = usuarios.some((usuario) => usuario.nombre === user)
let indice = usuarios.indexOf(usuarios.find((usuario) => usuario.nombre == user))

while (buscarUser != true) {
  alert("Usuario inexistente, porfavor vuelva a intentarlo");
  user = prompt("Nombre de usuario: ");
  buscarUser = usuarios.some((usuario) => usuario.nombre === user)
  
  indice = usuarios.indexOf(usuarios.find((usuario) => usuario.nombre == user))
}
let pass = prompt("Ingresa tu contraseña: ");
let intentos = 0
while (pass != usuarios[indice].contrasena && intentos <= 3) {
  alert("Contraseña incorrecta, vuelve a intentarlo");
  pass = prompt("Ingresa tu contraseña: ");
  intentos++
  if (intentos == 3) {
    alert("Ultimo intento");

  }
}
if (intentos <= 3) {
  saludar(usuarios[indice].nombre);
  let producto;
  seleccionProducto(producto);
  let respuesta = prompt("¿Desea realizar otra consulta?: ").toLowerCase();
  while (respuesta == "si") {
    if (respuesta == "si") {
      seleccionProducto(producto);
      respuesta = prompt(
        "¿Desea realizar otra consulta? (ingrese si para continuar): "
      ).toLowerCase();
    }
  }
  alert("Muchas gracias por tu visita " + usuarios[indice].nombre + ". Nos vemos pronto.");
} else {
  alert("No pudimos iniciar sesion. Ponte en contacto con soporte.Muchas gracias");
}
*/