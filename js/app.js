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
