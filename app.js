// Array para almacenar los nombres de los amigos
let amigos = [];
let sorteoRealizado = false; // Indica si ya se sorteó un amigo

// Función para agregar un amigo a la lista
function agregarAmigo() {
    if (sorteoRealizado) {
        alert("El sorteo ya fue realizado. Reinicia el juego para agregar más amigos.");
        return;
    }

    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios innecesarios

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    // Convierte todo a minúsculas para evitar duplicados con diferentes capitalizaciones
    let nombreNormalizado = nombre.toLowerCase();

    // Verifica si el nombre ya existe (sin importar mayúsculas o minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombreNormalizado)) {
        alert("Este nombre ya está en la lista. Ingresa un nombre diferente.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre al array
    input.value = ""; // Limpia el campo de entrada

    actualizarLista(); // Actualiza la lista en la pantalla
}

// Función para actualizar la lista de amigos en la pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de agregar nuevos elementos

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (sorteoRealizado) {
        alert("El amigo secreto ya fue elegido. Si quieres elegir otro, debes reiniciar el juego.");
        return;
    }

    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue amigos antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</p>`;

    sorteoRealizado = true; // Bloquea la opción de sortear nuevamente
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vacía el array
    sorteoRealizado = false; // Permite un nuevo sorteo
    document.getElementById("listaAmigos").innerHTML = ""; // Borra la lista en pantalla
    document.getElementById("resultado").innerHTML = ""; // Borra el resultado en pantalla
}
