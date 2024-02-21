let text =
  "JamieRickyEvelynKathleenShirleyAmandaNathanielJuanitaEarlDorothyKimberlyFrankJasonJacobMarilynStephaniePaulineDougAnniePhyllisAndresJuanCorneliusBeatriceChristopherDeborahSallyLisaEmilJoe";
let array = text.split(/(?=[A-Z])/);
let newtext = "";
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  newtext = newtext + "\n" + element;
}
console.log(newtext);
