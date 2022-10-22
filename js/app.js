//Funcion para saludar al nuevo usuario
const saludar = (nombre) =>{
    alert('Bienvenido ' + nombre + ' a YOURCOMPUTER, empecemos');
}

//Funcion para validar edad del usuario
const verificar = (edad) =>{
    if (edad < 18){
        alert('Necesitaras que un mayor valide tu compra');
    }
}
//Funcion para que el usuario selectocciones que tipo tipo de producto necesita
const seleccionProducto = (tipoProducto) => {
    while (tipoProducto != 'monitores' && tipoProducto != 'perifericos' && tipoProducto != 'cpu' && tipoProducto != 'notebook' && tipoProducto != 'auriculares'){
        tipoProducto = prompt('¿Que desea comprar? Opciones: monitores, perifericos, cpu, notebook,auriculares').toLowerCase();
        switch (tipoProducto){
            case 'monitores':
                alert('Muy pronto tendremos disponibles monitores samsung, lg, aorus, hp');
                break;
            case 'perifericos':
                alert('Muy pronto tendremos disponibles teclados y mouse con la mejor variedad');
                break;
            case 'cpu':
                alert('Muy pronto tendremos disponibles la mejores cpu gammer del mercado');
                break;
            case 'notebook':
                alert('Muy pronto tendremos disponibles las mejores notebooks');
                break;
            case 'auriculares':
                alert('Muy pronto tendremos disponibles diferentes tipos de audiculares para cumplir tus necesidades');
                break;
            default:
                alert('Opcion incorrecta, porfavor vuelva a intentarlo');
                break;
        }
    }
}

let nombreUsuario = prompt('Ingrese tu nombre').toUpperCase();
saludar(nombreUsuario);
let edadUsuario = Number(prompt('Ingresa tu edad'));
verificar(edadUsuario);
let producto;
seleccionProducto(producto);
alert('Muchas gracias por tu visita ' + nombreUsuario + '. Nos vemos pronto.');
