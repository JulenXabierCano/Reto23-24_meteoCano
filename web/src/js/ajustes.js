let dragging = ""

$(document).ready(function () {
    $("#ajustesDisponibles, #ajustesAplicados").attr("draggable", true)

    $(".icon").on("dragstart", (event) => {
        dragging = event.target.id
    })

    $("#ajustesAplicados").on("drop", (event) => {
        event.preventDefault()
        $("#" + dragging).appendTo("#ajustesAplicados")
        añadirAjuste(dragging)
        mostrarTiempoCiudad()
    })

    $("#ajustesDisponibles").attr("dropable", true)

    $("#ajustesDisponibles").on("drop", (event) => {
        event.preventDefault()
        $("#" + dragging).appendTo("#ajustesDisponibles")
        quitarAjustes(dragging)
        mostrarTiempoCiudad()
    })

    $("#ajustesAplicados").attr("dropable", true)

    $("#ajustesDisponibles, #ajustesAplicados").on("dragover", (event) => {
        event.preventDefault()
    })

    $("#ajustesDisponibles, #ajustesAplicados").on("dragenter", (event) => {
        event.preventDefault()
    })
});

function añadirAjuste(ajuste) {
    switch (true) {
        case !localStorage.getItem("ajustes"):
            localStorage.setItem("ajustes", ajuste)
            break
        case !localStorage.getItem("ajustes").includes(ajuste):
            localStorage.setItem("ajustes", localStorage.getItem("ajustes") + ";" + ajuste)
            break
        case localStorage.getItem("ajustes").includes(ajuste):
            break
    }
}

function quitarAjustes(ajuste) {
    let ajustes = localStorage.getItem("ajustes")
    switch (true) {
        case ajustes.includes(ajuste + ";"):
            ajustes = ajustes.replace(ajuste + ";", ""); break

        case ajustes.includes(";" + ajuste):
            ajustes = ajustes.replace(";" + ajuste, ""); break
        case ajustes.includes(ajuste):
            ajustes = ajustes.replace(ajuste, ""); break
    }

    localStorage.setItem("ajustes", ajustes)
}

function cargarAjustes() {
    let ajustes = localStorage.getItem("ajustes").split(";")

    ajustes.forEach(ajuste => {
        $("#" + ajuste).appendTo("#ajustesAplicados")
    });
}