let a = [0, -1, 2, -3, 1];
let b = [1, -2, 1, 0, 5];
let c = [-1, 0, 1, 2, -1, -4];

function findTriplets(array) {
  let n = array.length;
  let found = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (array[i] + array[j] + array[k] == 0) {
          console.log(array[i], array[j], array[k]);
          found = 1;
        }
      }
    }
  }

  if (found == 0) {
    console.log("No triplets found");
  }
}
console.log("A triplets: ");
findTriplets(a);
console.log("B triplets: ");
findTriplets(b);
console.log("c triplets: ");
findTriplets(c);