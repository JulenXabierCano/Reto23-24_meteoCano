/*
    Lista ciudades a usar:

    Irun:
    
 */


function cargarCiudades() {
    document.getElementById("ciudades").innerHTML = ""
    ciudades.forEach((ciudad) => {
        if (localStorage.getItem("ciudades") && localStorage.getItem("ciudades").includes(ciudad.ciudad)) {
            document.getElementById("ciudades").innerHTML += `
                    <div style="position:relative;">
                        <b>Ciudad:</b> ${ciudad.ciudad} <br><hr class="separador">
                        <b>Grados:</b> ${(ciudad.temperaturas.split(";"))[0]}ºC <br><hr class="separador">
                        <b>Humedad:</b> ${ciudad.humedad}%
                        <button class="btnEliminar" title="Dejar de ver ${ciudad.nombre}">X</button>
                        <hr class="divisor">
                    </div>
                    `
        }
    })
}