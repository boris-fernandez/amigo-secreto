// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Función para agregar amigos...
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que el campo no esté vacío:
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array:
    amigos.push(nombre);
    // Limpiar el campo de entrada:
    input.value = "";
    // Actualizar la lista en la interfaz:
    actualizarLista();
}




// Función para actualizar la lista en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
// Limpiar la lista antes de actualizar
    lista.innerHTML = "";
// Recorrer el array y agregar cada nombre a la lista
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}





// Función para sortear un amigo
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
// Validar que haya amigos en la lista
    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos para sortear.";
        return;
    }

// Generar un índice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
// Obtener el nombre sorteado
    let amigoSorteado = amigos[indice];
// Mostrar el resultado
    resultado.innerHTML = `🎉El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
