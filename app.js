// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// OBJETIVOS DEL EJERCICIO:
// - Entender variables 
// - Entender condicionales como if y else 
// - Entender funciones 
// - Entender listas (arrays), sumar y remover 
// - Entender lazos de repetición (loops), como for



// Array para almacenar nombres de amigos 
let amigos = []; // Inicializa un array vacío donde se almacenarán los nombres de amigos

// Función para agregar un amigo 
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo'); // Contiene el elemento del DOM con id 'amigo' (un campo de entrada)
    const nombreAmigo = inputAmigo.value.trim(); // Obtiene el texto ingresado en el campo, eliminando espacios al inicio y al final

    // Validar que el campo no esté vacío 
    if (nombreAmigo === "") { // Verifica si el campo de entrada está vacío
        alert("Por favor, inserte un nombre"); // Muestra una alerta si no hay texto ingresado
        return; // Detiene la ejecución de la función 
    }

    // Validar que el nombre no esté duplicado 
    if (amigos.includes(nombreAmigo)) { // Comprueba si el nombre ya existe en el array 'amigos'
        alert(`El nombre ${nombreAmigo} ya está en la lista`); // Muestra una alerta indicando que el nombre está duplicado
        return; // Detiene la ejecución de la función
    }

    // Agregar el nombre al array de amigos 
    amigos.push(nombreAmigo); // Agrega el nombre al array 'amigos'

    // Limpiar el campo de entrada 
    inputAmigo.value = ""; // Borra el texto del campo de entrada para que quede vacío después de agregar el nombre

    // Actualizar la lista en el HTML
    actualizarLista(); // Llama a la función 'actualizarLista' para reflejar los cambios en la interfaz de usuario
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtiene el elemento del DOM con id 'listaAmigos'

    // Limpiar el contenido actual de la lista 
    listaAmigos.innerHTML = ""; // Borra cualquier contenido previo dentro del contenedor de la lista. 

    // Recorrer el array con un ciclo for
    for (let i = 0; i < amigos.length; i++) { // Itera sobre cada elemento en el array 'amigos'
        const li = document.createElement('li'); // Crea un nuevo elemento <li> 
        li.textContent = amigos[i]; // Asigna al texto del elemento <li> el nombre del amigo actual en el array
        listaAmigos.appendChild(li); // Agrega el elemento <li> al contenedor de la lista en el DOM
    }
}

// Función para seleccionar un amigo aleatorio 
function sortearAmigo() {
    // Validar que haya amigos disponibles 
    if (amigos.length === 0) { // Comprueba si el array 'amigos' está vacío
        alert(`No hay amigos disponibles para sortear. Agrega al menos uno`); // Muestra una alerta si no hay amigos en la lista
        return; // Detiene la ejecución de la función
    }

    // Generar un índice aleatorio 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un número aleatorio entre 0 y la longitud del array menos uno

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; // Usa el índice aleatorio para obtener el nombre del array 

    // Mostrar el resultado en el HTML 
    const resultado = document.getElementById('resultado'); // Obtiene el elemento del DOM con id 'resultado' (donde se mostrará el nombre)
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; // Actualiza el contenido del elemento con el nombre sorteado
}