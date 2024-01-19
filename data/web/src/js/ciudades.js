/*
    Lista ciudades a usar:

    Irun:
    
 */


function cargarCiudades() {
    // Declaración de variables necesarias
    let ciudades
    var container = document.getElementById("ciudades")

    container.innerHTML = "";
    // Fetch para recuperar las ciudades disponibles
    /*
        Notas:
        --- Es probable que se envie el local storage para minimizar la carga de la conexión,
            de esta manera se podrán añadir infinitas localizaciónes
    */
    fetch("./src/js/data_sim.json")
        .then(response => response.json())
        .then(data => {
            // Rellenamos las ciudades con la respuesta
            ciudades = data.ciudades

            // Recorremos las ciudades para, en caso de estar guardadas, mostrarlas
            ciudades.forEach((ciudad) => {
                if (localStorage.getItem("ciudades").includes(ciudad.nombre)) {
                    container.innerHTML += `
                    <div style="position:relative;">
                        <b>Ciudad:</b> ${ciudad.nombre} <br><hr class="separador">
                        <b>Grados:</b> ${ciudad.grados}ºC <br><hr class="separador">
                        <b>Humedad:</b> ${ciudad.humedad}%
                        <button class="btnEliminar" title="Dejar de ver ${ciudad.nombre}">X</button>
                        <hr class="divisor">
                    </div>
                    `
                }
            })
        })
}