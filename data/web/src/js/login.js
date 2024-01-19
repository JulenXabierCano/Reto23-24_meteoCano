function crearLogin() {
    document.getElementById("body").innerHTML = (`
    <div class="loginForm">
        <h1>Inicia Sesión</h1>
        <form action="event.preventDefault(); login(email.value,password.value)" method="POST">
            <input type="text" placeholder="Email" name="email" required id="email">
            <br><br>
            <input type="password" placeholder="Contraseña" name="password" id="password" required>
            <br><br>
            <input type="submit" value="Iniciar Sesión">
        </form>
        <button class="left" onclick="crearRegister()">Registrarse</button>
    </div>
    `)
}

function crearRegister() {
    document.getElementById("body").innerHTML = (`
    <div class="loginForm">
        <h1>Registrarse</h1>
        <form onsubmit="event.preventDefault(); registrarse(name.value,email.value,password.value,c_password.value);" id="form">
            <input type="text" placeholder="Nombre" name="name" required>
            <br><br>
            <input type="text" placeholder="Email" name="email" required>
            <br><br>
            <input type="password" placeholder="Contraseña" name="password" required>
            <br><br>
            <input type="password" placeholder="Confirme contraseña" name="c_password" required>
            <br><br>
            <input type="submit" value="Registrarme" id="btnRegistrarse">
        </form>
        <button class="left" onclick="crearLogin()">Iniciar Sesión</button>
    </div>
    `)
}

async function registrarse(name, email, password, c_password) {
    document.getElementById("form").innerHTML = `
        <h4>Gracias ${name}, por elegirnos, espera mientras completamos tu registro</h4>
        <img src="https://calcapi.printgrid.io/file/loading-spinner.gif" alt="" id="iconoCarga">
    `
    await fetch("http://localhost:8082/api/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            c_password: c_password
        }),
    })
    crearPantallaMain()
}

async function login(email, password) {
    document.getElementById("form").innerHTML = `
        <h4>Gracias ${name}, por elegirnos, espera mientras completamos tu registro</h4>
        <img src="https://calcapi.printgrid.io/file/loading-spinner.gif" alt="" id="iconoCarga">
    `

    await fetch("http://localhost:8082/api/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            sessionStorage.setItem("token", data["token"] + "" + data[""])
        })
    crearPantallaMain()
}