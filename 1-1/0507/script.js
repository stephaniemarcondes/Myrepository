
function decode(arr) {
let arrnovo = []  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arrnovo.push(arr[i]);
    } else if (arr[i] % 2 != 0) {
      arrnovo.push(i);
    }
  }
  console.log(arrnovo);
  return arrnovo;
}
console.log(decode([5, 6, 7, 8, 9]));
