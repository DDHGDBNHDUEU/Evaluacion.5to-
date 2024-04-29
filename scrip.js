const iniciarJuego = document.querySelector('.iniciar');
const colores = ['uno', 'dos', 'tres', 'cuatro'];
let secuencia = [];
let iluminar;

// Generar secuencia
function generarSecuencia() {
    secuencia.push(colores[Math.floor(Math.random() * colores.length)]);
}

// iluminar botones 
function iluminarBotones() {
    let i = 0;
    iluminar = setInterval(function() {
        if (i < secuencia.length) {
            mostrarBoton(secuencia[i]);
            i++;
        } else {
            clearInterval(iluminar);
        }
    }, 2000); // tiempo entre cada botón
}

// Mostrar botón iluminado
function mostrarBoton(color) {
    document.querySelector('.' + color).style.backgroundColor = "white";
    setTimeout(function() {
        document.querySelector('.' + color).style.backgroundColor = "";
    }, 1000); 
}

// clic en botón iniciar juego
iniciarJuego.addEventListener('click', function() {
    generarSecuencia();
    iluminarBotones();
});
