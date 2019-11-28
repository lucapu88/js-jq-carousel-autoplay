// l'esercitazione di oggi prevede di aggiungere l'autoplay allo slider.
// L'idea è che ogni 3 secondi le slide cambino da sole, passando in automatico a visualizzare la slide successiva.

var clock = setInterval(function(){ //apro la funzione che fa partire il mio timer
  var imgActive = $('img.active'); //dichiaro la var contenente l'immagine visibile.
  var imgNext = imgActive.next('img'); //dichiaro la var contenente l'immagine successiva.
  var dotActive = $('i.active'); //dichiaro la var contenente il pallino attivo (colorato di blu).
  var dotNext = dotActive.next('i'); //dichiaro la var contenente il pallino successivo.
  if (imgNext.length == 0) { //controllo che ci sia un'immagine e nel caso non c'è, riprende l'immagine iniziale
   imgNext = $('img.first'); //se c'è un'immagine successiva, si prende la prima
   dotNext = $('i.first'); //se non c'è un pallino successivo, si prende il primo
  }
  (imgActive).removeClass('active'); //rimuovo la classe active all'immagine
  (dotActive).removeClass('active'); //rimuovo la classe active al pallino
  (imgNext).addClass('active'); //aggiungo la classe active all'immagine
  (dotNext).addClass('active'); //aggiungo la classe active al pallino

}, 3000) //tutto ciò che è stato dichiarato all'interno di questa funzione avviene con un intervallo di 3 secondi, quindi ogni 3 secondi lo slider cambia in automatico l'immagine.
function myStopFunction() {
clearInterval(clock);
}

$(document).ready(function() {
  $('.arrowRight').click(function() { // se clicco sulla freccia di destra, lo sfondo del body sale (la birra aumenta:P)
    $('body').css('background-position', 'center');
  });
  $('.arrowLeft').click(function() { // se clicco sulla freccia di sinistra, lo sfondo scende (la birra diminuisce :( )
    $('body').css('background-position', 'top');
  });
  $('.arrowRight').click(function() { //al click sulla freccia di destra imposto una funzione.
    var imgActive = $('img.active'); //dichiaro la var contenente l'immagine visibile.
    var imgNext = imgActive.next('img'); //dichiaro la var contenente l'immagine successiva.
    var dotActive = $('i.active'); //dichiaro la var contenente il pallino attivo (colorato di blu).
    var dotNext = dotActive.next('i');//dichiaro la var contenente il pallino successivo.
    if (imgNext.length == 0) { //controllo che ci sia un'immagine e nel caso non c'è, riprende l'immagine iniziale
      imgNext = $('img.first');
      dotNext = $('i.first');
    }
    if (!imgNext.hasClass('active')) { //se l'immagine successiva non ha classe active la aggiungo per renderla visibile e rimuovo la classe active dove era attiva in precedenza (in pratica sposto active).
      $(imgActive).removeClass('active');
      $(imgNext).addClass('active');
      $(dotActive).removeClass('active'); //stessa cosa di sopra ma per i pallini= la classe active si sposta cambiando così il colore del pallino.
      $(dotNext).addClass('active');
    }
  });//qui sotto faccio la stessa cosa, ma cliccando sulla freccia di sinistra. Non va all'immagine successiva ma va all'immagine precedente, idem per i pallini= processo inverso.
  $('.arrowLeft').click(function() {
    var imgActive = $('img.active');
    var imgNext = imgActive.prev('img');
    var dotActive = $('i.active');
    var dotNext = dotActive.prev('i')
    if (imgNext.length == 0) {
      imgNext = $('img.last');
      dotNext = $('i.last');
    }
    if (!imgNext.hasClass('active')) {
      $(imgActive).removeClass('active');
      $(imgNext).addClass('active');
      $(dotActive).removeClass('active');
      $(dotNext).addClass('active');
    }
  });
});
