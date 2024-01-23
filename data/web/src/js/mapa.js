function crearMapa() {
    fetch("http://localhost:8082/api/getCoordenadas")
        .then((data) => { return data.json() })
        .then((coordenadas) => {
            /* Creamos el mapa y le indicamos la vista inicial */
            var map = L.map('mapa').setView([43.11, -2.36], 8.5)
            // Le añadimos una marca de agua
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map)

            coordenadas.forEach(coordenada => {
                L.marker(coordenada.coordenadas.split(";"))
                    .addTo(map)
                    .on("click", function () { añadir(ciudad.ciudad) })
            });
        })
}