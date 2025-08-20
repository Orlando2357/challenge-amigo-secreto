let listaDeAmigos = []; // Array para almacenar la lista de amigos

//Funcion para agregar un amigo a la lista... Se manda llamar las funcions para limpiar el campo de entrada y mostrar la lista de amigos
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, inserte un nombre');
    } else {
        listaDeAmigos.push(amigo);
        limpiarCaja();
        mostrarLista();
    }
}


//Funcion para limpiar el campo 
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Funcion para mostrar la lista de amigos en el elemnto Lista de HTML
function mostrarLista() {
    let texto = ''
    for (let i = 0; i < listaDeAmigos.length; i++) {
        texto += '<li>' + listaDeAmigos[i] + '</li>';
    }
    asignarTextoElemento('listaAmigos',texto);
    //console.log(texto);
}

//Funcion para pasar textro desde JS a HTML 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector('#'+elemento);
    elementoHTML.innerHTML = texto;
}

//Funcion para sorterar amigo... Se agrega una alert para cuando la lista este vacia.
function sortearAmigo() {
    let posicionDeArray = Math.floor(Math.random()*listaDeAmigos.length);
    if (listaDeAmigos.length === 0){
        alert('Lista de amigos vacia.');
    } else {
        asignarTextoElemento('resultado',listaDeAmigos[posicionDeArray]);
    }
}