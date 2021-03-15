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

    var arr = [];
    while(arr.length < 5){
        var i = Math.floor(Math.random() * 10) + 1;
        if(arr.indexOf(i) === -1) arr.push(i);
    }
    console.log(arr);

    $("#numeri").text(arr);


    setTimeout(arr, 3000);
});      


