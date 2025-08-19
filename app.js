let listaDeAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Valor invalido');
    } else {
        listaDeAmigos.push(amigo)
    }
}