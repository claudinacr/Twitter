var botonSend = document.getElementById('botonSend');
var cajaTweet = document.querySelector('.sent_messages');

function sendTweet() {
    var mensaje = document.getElementById('mensaje').value;
    var tweet = document.createElement('div');
    tweet.className = 'tweet';
    var tweetText = document.createTextNode(mensaje);
    tweet.appendChild(tweetText);
    cajaTweet.appendChild(tweet);

}

botonSend.onclick = sendTweet;
//Otra forma de llamar a la funcion en el evento click del boton
//botonSend.addEventListener("click",sendTweet);