// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almcenar los nombres de amigos
let amigos =[];

//Funcion para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    //Validar que el campo no este vacio
    if(nombreAmigo == ""){
        alert("Por favor, insterte un nombre.");
        return; // Dettiene la ejecucion de la funcion
     }

    // Validar que el nombre no este duplicado
    if(amigos.includes(nombreAmigo)){
      alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
        return;
            
    }

    //Agregar el nombre del array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    //Actulaizar la lista en el HTML
    actulizarLista();

}

// Funcion para actualizar la lista de amigos en la interfaz
function actulizarLista(){
    const listaAmigos = document.getElementById('listaAmigos'); 

    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = "";  // Borra cualquier contenido dentro del contenedor de la lista

    // Recorrer el array con un ciclo for
    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);

    }


}


// Funcion para selecionar un amigo aleatorio
function sortearAmigo(){
    // Validar que haya amigos disponibles
    if(amigos.length == 0){  // Comprueba si el array 'amigos' esta vacio.
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    //Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un numero aleatorio entre 0 y la longitud del array menor

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; //Usa el indice aleatorio para obtener un nombre del array.

    // Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;






}