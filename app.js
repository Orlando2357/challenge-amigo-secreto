let listaDeAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, inserte un nombre');
    } else {
        listaDeAmigos.push(amigo);
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}