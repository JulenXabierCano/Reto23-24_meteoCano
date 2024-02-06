var ciudades = []

obtenerCiudades()

setInterval(() => {
    obtenerCiudades()
}, 15 * 1000);

function obtenerCiudades() {
    fetch("http://10.10.17.145:8082/api/getCiudades")
        .then((data) => { return data.json() })
        .then((data) => {
            console.log(data)
            ciudades = data
            mostrarTiempoCiudad()
            cargarAjustes()
        })
}

function mostrarTiempoCiudad() {
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn7/2xnt6e0ki3J8AGVI5ootu+VbBnOhl2gqSS83VOZl4fYf+mPWbcD/yKjFgdTblbXGIWqlmwCvHaJ2Oo0hbAqR1D+Rlfv8/iskSdso/zdJF4WgpTLWGmkzuQV5PzvVPddxRNH0wtS6sk1m3Whm3jXVoo4Sfegis7vEvCG64URvWojR97AbLQxS6ptQ5zevxizhRBq+PeIko1LV8hT78o/nX+RNZPJJCo8l1VGxcklphjGMqVzlsh/nolLQjKhFny0aMRqZgfliIVMRmZlYJu395psJpXdIACzWNpgfoKYBU6F5KDjLztcDpj2ecLwO97Mg2qgTUi40uK5OPsdg0/wIDAQAB'
        },
        mode: 'cors', // Indica que se permiten solicitudes CORS
        cache: 'no-cache', // No se almacena en caché la respuesta
        credentials: 'same-origin', // Envía las credenciales (por ejemplo, cookies) si el origen es el mismo
        redirect: 'follow', // Sigue las redirecciones del servidor
        referrerPolicy: 'no-referrer' // No envía el Referer header
    };

    const divciudades = document.getElementById("ciudades")
    document.getElementById("ciudades").innerHTML = ''
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

                htmlBuilder += `
                    <hr>
                    <p id="borrar" onclick="borrarCiudad('${ciudad.ciudad}')">Dejar de ver</p>
                `

                htmlBuilder += "</div>"
            }
        });
        htmlBuilder += "<p>Ponga el raton encima de los nombres para ver la previsión de mañana</p>"
        divciudades.innerHTML = htmlBuilder
    } else {
        document.getElementById("tituloCiudades").innerHTML = "No se han encontrado ciudades"
    }

}

function añadir(ciudad) {
    switch (true) {
        case !localStorage.getItem("ciudades"):
            localStorage.setItem("ciudades", ciudad); break
        case localStorage.getItem("ciudades").includes(ciudad):
            alert(ciudad + " ya se está mostrando"); break
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
            console.log(data)
            data.forEach((ciudad) => {
                document.getElementById("selectCiudad").innerHTML += `
                        <option value="${ciudad.ciudad}">${ciudad.ciudad}</option>
                `
            })
        })
}