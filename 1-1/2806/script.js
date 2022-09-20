function sequencePosNum(numero) {
  let array = [];
  for (let i = 0; i <= numero; i++) {
      if (i % 2 == 0) {
          array.push(i);
        }
    }

  return array;
}
console.log(sequencePosNum(20));
