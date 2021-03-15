// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// -------------

// Genero 5 numeri casuali;
// Faccio partire un timer di 30 secondi;
// Parte nuovo timer di 30 secondi, senza far visualizzare i numeri;
// Genero 1 prompt per volta (x5 volte) e mi salvo gli input dell'utentente in una var (array);
// Stampo i numeri indovinati e quanti. (ex: "Indovinati 4 numeri su 5: 10, 29, 30, 1.")



$(document).ready(function () {
    // Genero 5 numeri random da 0 a 100;
    var arr = [];
    while(arr.length < 5){
        var i = Math.floor(Math.random() * 10) + 1;
        if(arr.indexOf(i) === -1) arr.push(i);
    }

    // Console log dei miei numeri random;
    console.log(arr);

    // Stampo numeri sull'html;
    $(".numeri").text(arr);

    // Creo funzione da inserire all'interno del mio comando "setTimeout";
    // Faccio diventare i miei numeri invisibili allo scadere del timeout;
    function endShow(){
        $('.numeri').css('display', 'none');
    }

    // Creo variabile e setto il timer di timeOut;
    var timerShow = setTimeout(endShow, 30000);

    var timerHide = setTimeout(promptShow, 30000);

    function promptShow(){

    var i = 1;
    var j = 0;
    while (i >= 1 && i <= 5) {
        var pippo = (parseInt(prompt("Dimmi i numeri che ti ricordi, uno per volta")));
        if (arr.includes(pippo)) {
            console.log(pippo);
            $(".risultato").append(pippo + " ");
            j++;
        } i++;
    }
    $(".risultato").append("<br> Hai indovinato " + j + " numeri");
}
});