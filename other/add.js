for (let i = 0; i < 1000; i++) {
  if (i < 10) {
    console.log('"00' + i + '",');
  }

  if (i > 9 && i < 100) {
    console.log('"0' + i + '",');
  }
  if (i > 99) {
    console.log(i + ",");
  }
}
