var frutaTres = "Apple, Banana, Kiwi, Uva"

var frutaQuatro= frutaTres.replace(/\s/g, " | ");
console.log('frutaQuatro: ', frutaQuatro);


//"Apple,<br>Banana,<br>Kiwi,<br>Uva"
frutariaTres=frutaQuatro.replace(/,/g, "");
console.log('frutariaTres:', frutariaTres);