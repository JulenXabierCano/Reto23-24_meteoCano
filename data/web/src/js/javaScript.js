$("document").ready(
    $("*").tooltip()
)


function crearPantallaMain() {
    document.getElementById("body").innerHTML = `
    <header>
        <h1 id="titulo">MeteoCano</h1>
        <nav>
            <button onclick="pantallaAjustes()">Ajustes</button>
            <button class="login" onclick="crearLogin()">Login</button>
        </nav>
    </header>
    <hr>

    <div id="container">
        <div id="mapa"></div>
        <div id="ciudades"></div>
    </div>
    `

    crearMapa()

    if (localStorage.getItem("ciudades")) {
        cargarCiudades()
    } else
        document.getElementById("ciudades").innerHTML = "No se han guardado ciudades aún"
}