// Funciones
function crearMapa() {
    /* Creamos el mapa y le indicamos la vista inicial */
    var map = L.map('mapa').setView([43.1611, -2.5873], 9)
    // Le añadimos una marca de agua
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    /* Creamos los marcadores: */
    let ciudades
    fetch("./src/js/data_sim.json")
        .then(response => response.json())
        .then(data => {
            data.ciudades.forEach((ciudad) => {
                L.marker(ciudad.localizacion)
                    .addTo(map)
                    .on("click", function () { añadir(ciudad.nombre) })
            })

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
                break
        }
    }
}