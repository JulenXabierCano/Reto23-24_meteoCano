function crearMapa() {
    fetch("http://10.10.17.145:8082/api/getCoordenadas")
        .then((data) => { return data.json() })
        .then((coordenadas) => {
            /* Creamos el mapa y le indicamos la vista inicial */
            var map = L.map('mapa').setView([43.11, -2.36], 8.5)
            // Le añadimos una marca de agua
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map)

            coordenadas.forEach(coordenada => {
                marker = L.marker(coordenada.coordenadas.split(";"))
                    .addTo(map)
                    .on("click", function () {
                        añadir(coordenada.ciudad)
                        marker._icon.classList.add("añadido")
                    })
            });
        })
}