$("document").ready(
    $("*").tooltip()
)


function crearPantallaMain() {
    htmlBuilder = `
    <header>
        <h1 id="titulo">MeteoCano</h1>
        <nav>
            <button onclick="pantallaAjustes()">Ajustes</button>
    `

    if (!sessionStorage.getItem("token")) {
        htmlBuilder += `<button class="login" onclick="crearLogin()">Login</button>`
    } else {
        htmlBuilder += `<button class="logout" onclick="logout()">${sessionStorage.getItem("token").split(";")[1]}</button>`
    }

    htmlBuilder += `
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