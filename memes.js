// Lista de URLs de publicaciones de Instagram (pueden ser iframe o links públicos)
const publicaciones = [
    "https://www.instagram.com/p/DL9qBWJxstb/embed",
    "https://www.instagram.com/p/C6nToQHNLht/embed",
    "https://www.instagram.com/p/C6nUADCNb6s/embed"
];

let indice = 0;
const cantidadPorCarga = 6;

function cargarMemes() {
    const contenedor = document.getElementById('contenedor-memes');
    const slice = publicaciones.slice(indice, indice + cantidadPorCarga);

    slice.forEach(url => {
        const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.className = "instagram-media";
            iframe.loading = "lazy";
            iframe.frameBorder = "0";
            iframe.allowtransparency = "true";
            iframe.allowfullscreen = "true";
            iframe.style = "width:100%; height:600px;";
        contenedor.appendChild(iframe);
    });

    indice += cantidadPorCarga;

    if (indice >= publicaciones.length) {
    document.getElementById("verMasBtn").style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarMemes();
    document.getElementById("verMasBtn").addEventListener("click", cargarMemes);
});
