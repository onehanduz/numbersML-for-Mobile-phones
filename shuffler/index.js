function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

let text = `475	chelak
476	brezent
477	registon
478	rex(dinozavr)
479	aroq
480	chiz(ovqat)
481	chittak(jeck)
482	Rin
483	rim(Kolizey)
484	chira(oldingi)
485	chillak
486	chiyon
487	Rick
488	rif(karol oroli)
489	chibin
490	Roʻza(titanik)
491	cho't
492	cho'ntak
493	roʻmol
494	choʻchqa
495	cho'loq(kolyaskasi)
496	cho'yan
497	roʻk(conterdagi)
498	choʻx
499	cho'p`;

let array = text.split("\n");

shuffle(array);

let shuffled = array.join("\n");

console.log(shuffled);
