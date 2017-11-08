var botonSend = document.getElementById('botonSend');
var cajaTweet = document.querySelector('.sent_messages');

botonSend.disabled = true;
//Al iniciar la pagina el textarea está vacio por lo que
//el boton Tweet está deshabilitado

function sendTweet() {
    var mensaje = document.getElementById('mensaje').value;

    if (mensaje.length < 1) {
        alert('Mensaje vacio. No se puede enviar mensaje');
    } else {
        var tweet = document.createElement('div');
        tweet.className = 'tweet';
        var tweetText = document.createTextNode(mensaje);
        tweet.appendChild(tweetText);
        cajaTweet.appendChild(tweet);
    }

}

botonSend.onclick = sendTweet;
//Otra forma de llamar a la funcion en el evento click del boton
//botonSend.addEventListener("click",sendTweet);

//Funcionalidad de Contador y Textarea

var textArea = document.getElementById('mensaje');
var contador = document.getElementById('contador');
var hr = document.querySelector('hr');

function aumentoHeight() {
    textArea.style.height = 'auto';
    textArea.style.height = (textArea.scrollHeight) + 'px';
}

function contadorCambio() {

    aumentoHeight();
    var cuenta = 140 - textArea.value.length;

    if (cuenta < 0) {
        contador.style.color = 'red'
    } else if (cuenta > 20) {
        contador.style.color = '#0759A5'
    } else if (cuenta <= 20 && cuenta > 10) {
        contador.style.color = '#26A535';
    } else if (cuenta <= 10) {
        contador.style.color = '#E5317D';
    }

    contador.innerHTML = cuenta;

    if (textArea.value.length == 0 || textArea.value.length > 140) {
        botonSend.disabled = true;
        hr.style.borderColor = 'gray';
    } else {
        botonSend.disabled = false;
        hr.style.borderColor = '#6AD2F3';
    }
}
textArea.onfocus = contadorCambio;
textArea.oninput = contadorCambio;

textArea.onkeyup = function (evt) {
    evt = evt || window.event;

    if (evt.keyCode == 13) {
        var rows = parseInt(textArea.getAttribute("rows"));

        rows += 1;

        textArea.setAttribute("rows", toString(rows));
        aumentoHeight();
    }
};