function crearMapa() {
    fetch("http://10.10.17.145:8082/api/getCoordenadas")
        .then((data) => { return data.json() })
        .then((coordenadas) => {
            /* Creamos el mapa y le indicamos la vista inicial */
            var map = L.map('mapa').setView([43.11, -2.36], 8.5)
            // Le añadimos una marca de agua
            marker = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map)

            coordenadas.forEach(coordenada => {
                marker = L.marker(coordenada.coordenadas.split(";"))
                    .addTo(map)
                    .on("click", function () {
                        this._icon.classList.add("añadido")
                        añadir(coordenada.ciudad, this)
                    })
                marker._icon.classList.add(coordenada.ciudad.replace(" ", "_"))

                if (localStorage.getItem("ciudades") && localStorage.getItem("ciudades").includes(coordenada.ciudad)) {
                    marker._icon.classList.add("añadido")
                    console.log(document.getElementsByClassName(coordenada.ciudad.replace(" ", "_"))[0])
                }
            });
        })
}