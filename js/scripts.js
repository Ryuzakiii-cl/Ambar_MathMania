function generateSum() {
    const num1 = Math.floor(Math.random() * 1000);
    const num2 = Math.floor(Math.random() * 1000);
    const sumQuestion = document.getElementById('sumQuestion');
    sumQuestion.innerHTML = `${num1} + ${num2} = ?`;
    sumQuestion.dataset.answer = num1 + num2;
}

function checkSum() {
    const userAnswer = parseInt(document.getElementById('sumAnswer').value);
    const correctAnswer = parseInt(document.getElementById('sumQuestion').dataset.answer);
    const sumResult = document.getElementById('sumResult');

    if (userAnswer === correctAnswer) {
        sumResult.innerHTML = `<div class="alert alert-success" role="alert">¡Correcto! ${correctAnswer} ✅</div>`;
        actualizarPuntuacion(true);
    } else {
        sumResult.innerHTML = `<div class="alert alert-danger" role="alert">Incorrecto ❌. La respuesta correcta es ${correctAnswer}</div>`;
        actualizarPuntuacion(false);
    }

    generateSum();
    document.getElementById('sumAnswer').value = '';
}

function generateResta() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * num1);
    const restaQuestion = document.getElementById('restaQuestion');
    restaQuestion.innerHTML = `${num1} - ${num2} = ?`;
    restaQuestion.dataset.answer = num1 - num2;
}


function checkResta() {
    const userAnswer = parseInt(document.getElementById('restaAnswer').value);
    const correctAnswer = parseInt(document.getElementById('restaQuestion').dataset.answer);
    const restaResult = document.getElementById('restaResult');

    if (userAnswer === correctAnswer) {
        restaResult.innerHTML = `<div class="alert alert-success" role="alert">¡Correcto! ${correctAnswer} ✅</div>`;
        actualizarPuntuacion(true);
    } else {
        restaResult.innerHTML = `<div class="alert alert-danger" role="alert">Incorrecto ❌. La respuesta correcta es ${correctAnswer}</div>`;
        actualizarPuntuacion(false);
    }

    generateResta();
    document.getElementById('restaAnswer').value = '';
}

function generateMultiplicacion() {
    const num1 = Math.floor(Math.random() * 120) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const multiplicacionQuestion = document.getElementById('multiplicacionQuestion');
    multiplicacionQuestion.innerHTML = `${num1} × ${num2} = ?`;
    multiplicacionQuestion.dataset.answer = num1 * num2;
}

function checkMultiplicacion() {
    const userAnswer = parseInt(document.getElementById('multiplicacionAnswer').value);
    const correctAnswer = parseInt(document.getElementById('multiplicacionQuestion').dataset.answer);
    const multiplicacionResult = document.getElementById('multiplicacionResult');

    if (userAnswer === correctAnswer) {
        multiplicacionResult.innerHTML = `<div class="alert alert-success" role="alert">¡Correcto! ${correctAnswer} ✅</div>`;
        actualizarPuntuacion(true);
    } else {
        multiplicacionResult.innerHTML = `<div class="alert alert-danger" role="alert">Incorrecto ❌. La respuesta correcta es ${correctAnswer}</div>`;
        actualizarPuntuacion(false);
    }


    generateMultiplicacion();
    document.getElementById('multiplicacionAnswer').value = '';
}

function generateDivision() {
    let num1 = Math.floor(Math.random() * 900) + 100; // Genera un número aleatorio de 100 a 999 para el dividendo
    let divisorCandidates = []; // Almacenará los posibles divisores de num1
    for (let i = 2; i <= 9; i++) {
        if (num1 % i === 0) {
            divisorCandidates.push(i);
        }
    }
    if (divisorCandidates.length === 0) {
        // Si no hay divisores encontrados, generar un nuevo número
        generateDivision();
        return;
    }
    let num2 = divisorCandidates[Math.floor(Math.random() * divisorCandidates.length)]; // Selecciona un divisor aleatorio
    const divisionQuestion = document.getElementById('divisionQuestion');
    divisionQuestion.innerHTML = `${num1} ÷ ${num2} = ?`;
    divisionQuestion.dataset.answer = num1 / num2;
}




function checkDivision() {
    const userAnswer = parseInt(document.getElementById('divisionAnswer').value);
    const correctAnswer = parseInt(document.getElementById('divisionQuestion').dataset.answer);
    const divisionResult = document.getElementById('divisionResult');

    if (userAnswer === correctAnswer) {
        divisionResult.innerHTML = `<div class="alert alert-success" role="alert">¡Correcto! ${correctAnswer} ✅</div>`;
        actualizarPuntuacion(true);
    } else {
        divisionResult.innerHTML = `<div class="alert alert-danger" role="alert">Incorrecto ❌. La respuesta correcta es ${correctAnswer}</div>`;
        actualizarPuntuacion(false);
    }

    generateDivision();
    document.getElementById('divisionAnswer').value = '';
}

function generatePorcentajes() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const porcentajesQuestion = document.getElementById('porcentajesQuestion');
    porcentajesQuestion.innerHTML = `${num1}% de ${num2} = ?`;
    porcentajesQuestion.dataset.answer = (num1 * num2) / 100;
}

function checkPorcentajes() {
    const userAnswer = parseFloat(document.getElementById('porcentajesAnswer').value);
    const correctAnswer = parseFloat(document.getElementById('porcentajesQuestion').dataset.answer).toFixed(2);
    const porcentajesResult = document.getElementById('porcentajesResult');

    if (userAnswer.toFixed(2) === correctAnswer) {
        porcentajesResult.innerHTML = `<div class="alert alert-success" role="alert">¡Correcto! ${correctAnswer} ✅</div>`;
        actualizarPuntuacion(true);
    } else {
        porcentajesResult.innerHTML = `<div class="alert alert-danger" role="alert">Incorrecto ❌. La respuesta correcta es ${correctAnswer}</div>`;
        actualizarPuntuacion(false);
    }

    generatePorcentajes();
    document.getElementById('porcentajesAnswer').value = '';
}

function generateRazones() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const razonesQuestion = document.getElementById('razonesQuestion');
    razonesQuestion.innerHTML = `¿Cuál es la razón de ${num1} a ${num2}? (Escribe como fracción o decimal)`;
    razonesQuestion.dataset.answer = (num1 / num2).toFixed(2);
}

function checkRazones() {
    const userAnswer = parseFloat(document.getElementById('razonesAnswer').value).toFixed(2);
    const correctAnswer = parseFloat(document.getElementById('razonesQuestion').dataset.answer);
    const razonesResult = document.getElementById('razonesResult');

    if (userAnswer === correctAnswer) {
        razonesResult.innerHTML = `<div class="alert alert-success" role="alert">¡Correcto! ${correctAnswer} ✅</div>`;
        actualizarPuntuacion(true);
    } else {
        razonesResult.innerHTML = `<div class="alert alert-danger" role="alert">Incorrecto ❌. La respuesta correcta es ${correctAnswer}</div>`;
        actualizarPuntuacion(false);
    }

    generateRazones();
    document.getElementById('razonesAnswer').value = '';
}


/* Mostrar juegos */

function showGame(gameId) {
    const games = document.querySelectorAll('.game-container');
    games.forEach(game => {
        if (game.id === gameId) {
            game.style.display = 'block';
            if (gameId === 'suma') {
                generateSum();
            } else if (gameId === 'resta') {
                generateResta();
            } else if (gameId === 'multiplicacion') {
                generateMultiplicacion();
            } else if (gameId === 'division') {
                generateDivision();
            } else if (gameId === 'porcentajes') {
                generatePorcentajes();
            } else if (gameId === 'razones') {
                generateRazones();
            }
        } else {
            game.style.display = 'none';
        }
    });
}


/* puntuacion */

let puntuacion = 0;

function actualizarPuntuacion(sumar) {
    if (sumar) {
        puntuacion += 2;
    } else {
        puntuacion -= 1;
    }
    document.getElementById('puntuacion').innerText = `Puntuación: ${puntuacion}`;
    localStorage.setItem('puntuacion', puntuacion);
}

function cargarPuntuacion() {
    let puntuacionGuardada = localStorage.getItem('puntuacion');

    if (!puntuacionGuardada) {
        puntuacionGuardada = 0;
    } else {
        puntuacionGuardada = parseInt(puntuacionGuardada);
    }

    puntuacion = puntuacionGuardada;
    document.getElementById('puntuacion').innerText = `Hola Ámbar!! Tienes un total de ${puntuacionGuardada} puntos`;
}

/* Inicialización de la página */
document.addEventListener('DOMContentLoaded', (event) => {
    init();
});

let premioValor = 0;

function init() {
    let puntuacionGuardada = localStorage.getItem('puntuacion');
    if (puntuacionGuardada === null) {
        puntuacionGuardada = 0;
        localStorage.setItem('puntuacion', puntuacionGuardada);
    }
    document.getElementById('puntuacion').innerText = `Puntuación: ${puntuacionGuardada}`;
}

function openModal(valor) {
    premioValor = valor;
    const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
    confirmModal.show();
}

document.getElementById('confirmButton').addEventListener('click', () => {
    canjearPremio(premioValor);
    const confirmModal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
    confirmModal.hide();
});

function canjearPremio(valor) {
    let puntuacionActual = parseInt(localStorage.getItem('puntuacion'));
    const notificationModal = new bootstrap.Modal(document.getElementById('notificationModal'));
    const notificationMessage = document.getElementById('notificationMessage');

    if (puntuacionActual >= valor) {
        puntuacionActual -= valor;
        localStorage.setItem('puntuacion', puntuacionActual);
        document.getElementById('puntuacion').innerText = `Puntuación: ${puntuacionActual}`;
        notificationMessage.innerText = '¡Premio canjeado exitosamente!';
    } else {
        let puntosFaltantes = valor - puntuacionActual;
        notificationMessage.innerText = `No tienes suficientes puntos. Te faltan ${puntosFaltantes} puntos.`;
    }
    notificationModal.show();
}
