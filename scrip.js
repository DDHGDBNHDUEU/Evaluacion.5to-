const iniciarJuego = document.querySelector('.iniciar');
const teclas = document.querySelectorAll('.tecla');
const colores = ['uno', 'dos', 'tres', 'cuatro'];
let secuencia = [];
let iluminar;
let turno = 0; 

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
    }, 3000); // tiempo entre cada botón
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


// clic teclas
teclas.forEach(tecla => {
    tecla.addEventListener('click', ClicTecla);
});

function ClicTecla(event) {
    const teclaSeleccionada = event.target.classList[1]; 
    mostrarBoton(teclaSeleccionada); 
    if (teclaSeleccionada === secuencia[turno]) {
        turno++;
        if (turno === secuencia.length) {
            turno = 0;
            generarSecuencia();
            iluminarBotones();
        }
    } else {
        alert("perdiste :(");
        turno = 0;
        secuencia = [];
    }
}
