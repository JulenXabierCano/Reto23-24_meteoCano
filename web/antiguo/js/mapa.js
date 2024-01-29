var ciudades = []

// Funciones
function crearMapa() {
    /* Creamos el mapa y le indicamos la vista inicial */
    var map = L.map('mapa').setView([43.1351, -2.0311], 9)
    // Le añadimos una marca de agua
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    /* Creamos los marcadores: */
    fetch("http://localhost:8082/api/getCiudades", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
        },
    })
        .then(response => response.json())
        .then(data => {
            data.forEach((ciudad) => {
                ciudades.push(ciudad)

                L.marker(ciudad.coordenadas.split(";"))
                    .addTo(map)
                    .on("click", function () { añadir(ciudad.ciudad) })
            })

            cargarCiudades()
        })
}

function añadir(ciudad) {
    if (confirm(`¿Quieres ver el tiempo en ${ciudad}?`)) {
        switch (true) {
            case localStorage.getItem("ciudades") == undefined:
                localStorage.setItem("ciudades", ciudad)
                cargarCiudades()
                break
            case !localStorage.getItem("ciudades").includes(ciudad):
                localStorage.setItem("ciudades", `${localStorage.getItem("ciudades")};${ciudad}`)
                cargarCiudades()
                break
            case localStorage.getItem("ciudades").includes(ciudad):
                alert(`${ciudad} ya está registrada para mostrar`)
                cargarCiudades()
                break
        }
    }
}