var ciudades = []

obtenerCiudades()

setInterval(() => {
    obtenerCiudades()
}, 15 * 1000);

function obtenerCiudades() {
    fetch("http://10.10.17.145:8082/api/getCiudades")
        .then((data) => { return data.json() })
        .then((data) => {
            ciudades = data
            mostrarTiempoCiudad()
            cargarAjustes()
        })
}

function mostrarTiempoCiudad() {
    const divciudades = document.getElementById("ciudades")
    divciudades.innerHTML = ''
    ajustes = ""
    if (localStorage.getItem("ajustes")) {
        ajustes = localStorage.getItem("ajustes")
    } else {
        ajustes = "iconoTemperatura;iconoViento"
        localStorage.setItem("ajustes", ajustes)
        cargarAjustes()
    }

    htmlBuilder = ""

    if (localStorage.getItem("ciudades")) {
        ciudades.forEach(ciudad => {
            if (localStorage.getItem("ciudades").includes(ciudad.ciudad)) {
                htmlBuilder += `<div class="ciudad">
                        <p id="nombreCiudad"><b>${ciudad.ciudad}</b></p>
                `
                if (ajustes.includes("iconoTemperatura")) {
                    htmlBuilder += `
                        <hr>
                        Temperatura:
                        <br>
                        ${ciudad.temperaturas}ºC
                    `
                }
                if (ajustes.includes("iconoViento")) {
                    htmlBuilder += `
                        <hr>
                        Viento:
                        <br>
                        ${ciudad.viento.split(";")[0]}m/s
                        <br>
                        <div class="brujula">                        
                            <img class="flecha" style="transform: rotate(${ciudad.viento.split(";")[1]}deg)"
                                src="https://cdn2.iconfinder.com/data/icons/arrow-collection/200/vector_286_56-512.png">
                        </div>
                    `
                }
                if (ajustes.includes("iconoPrecipitaciones")) {
                    htmlBuilder += `
                        <hr>
                        Estado del cielo:
                        <br>
                        ${ciudad.estadoDelCielo.charAt(0).toUpperCase()}${ciudad.estadoDelCielo.slice(1)}
                        <br><br>
                        Lluvia:
                        <br>
                        ${ciudad.lluvia}L/m2
                    `
                }
                if (ajustes.includes("iconoHumedad")) {
                    htmlBuilder += `
                        <hr>
                        Humedad:
                        <br>
                        ${ciudad.humedad}%   
                    `
                }

                htmlBuilder += "</div>"
            }
        });

        divciudades.innerHTML = htmlBuilder
    } else {
        document.getElementById("tituloCiudades").innerHTML = "No se han encontrado ciudades"
    }

}

function añadir(ciudad, marker) {
    switch (true) {
        case !localStorage.getItem("ciudades"):
            localStorage.setItem("ciudades", ciudad); break
        case localStorage.getItem("ciudades").includes(ciudad):
            marker._icon.classList.remove("añadido")
            borrarCiudad(ciudad)
            break
        case !localStorage.getItem("ciudades").includes(ciudad):
            localStorage.setItem("ciudades", localStorage.getItem("ciudades") + ";" + ciudad); break
    }

    $("#tituloCiudades").text("Ciudades seleccionadas:")
    mostrarTiempoCiudad()
}

function borrarCiudad(ciudad) {
    switch (true) {
        case localStorage.getItem("ciudades").includes(ciudad + ";"):
            localStorage.setItem("ciudades", localStorage.getItem("ciudades").replace(ciudad + ";", "")); break
        case localStorage.getItem("ciudades").includes(";" + ciudad):
            localStorage.setItem("ciudades", localStorage.getItem("ciudades").replace(";" + ciudad, "")); break
        case localStorage.getItem("ciudades").includes(ciudad):
            localStorage.removeItem("ciudades"); break
    }
    mostrarTiempoCiudad()
}

function selectCiudadesRellenar() {
    fetch("http://10.10.17.145:8082/api/getCiudadesActuales")
        .then((data) => { return data.json() })
        .then((data) => {
            data.forEach((ciudad) => {
                document.getElementById("selectCiudad").innerHTML += `
                        <option value="${ciudad.ciudad}">${ciudad.ciudad}</option>
                `
            })
        })
}