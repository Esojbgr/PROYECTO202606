// Cargar productos desde API

if (window.location.pathname.includes("productos.html")) {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => mostrarProductos(data));
}

function mostrarProductos(productos) {
    const contenedor = document.getElementById("lista-productos");

    productos.forEach(prod => {
        const card = document.createElement("div");
        card.className = "producto-card";
        card.innerHTML = `
            <h3>${prod.title}</h3>
            <p>${prod.category}</p>
        `;

        card.onclick = () => {
            localStorage.setItem("productoSeleccionado", JSON.stringify(prod));
            window.location.href = "detalle.html";
        };

        contenedor.appendChild(card);
    });
}


// Mostrar detalle del producto

if (window.location.pathname.includes("detalle.html")) {
    const prod = JSON.parse(localStorage.getItem("productoSeleccionado"));

    const contenedor = document.getElementById("detalle-producto");

    contenedor.innerHTML = `
        <h2>${prod.title}</h2>
        <img src="${prod.image}" width="200">
        <p><strong>Categoría:</strong> ${prod.category}</p>
        <p><strong>Precio:</strong> $${prod.price}</p>
        <p>${prod.description}</p>
    `;
}

card.innerHTML = `
    <img src="${prod.image}" width="120">
    <h3>${prod.title}</h3>
    <p>${prod.category}</p>
`;


// LOGIN SIMPLE

function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensaje-error");

    // Validar correo (formato correcto)
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexCorreo.test(email)) {
        mensaje.textContent = "Ingrese un correo válido.";
        return;
    }

    if (password.length === 0) {
        mensaje.textContent = "La contraseña no puede estar vacía.";
        return;
    }

    // Guardar sesión
    localStorage.setItem("usuarioLogeado", email);

    // Redirigir al menú principal
    window.location.href = "index.html";
}

function verificarLogin() {
    const usuario = localStorage.getItem("usuarioLogeado");

    if (!usuario) {
        window.location.href = "login.html";
    }
}



// CERRAR SESIÓN

function logout() {
    localStorage.removeItem("usuarioLogeado");
    window.location.href = "login.html";
}


