let arr = [10, 20, 30, 40];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// var itr = arr[Symbol.iterator]();

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

/* let animal1 = animals[0];
let animal2 = animals[1];
let animal3 = animals[2];
let animal4 = animals[3];

console.log(animal1); */

let [animal1, animal2, animal3, animal4] = ["dog", "cat", "bird", "fish"];

//console.log(animal4);

let a = 5;
let b = 6;

//let temp;

// temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];

// console.log("a:", a);
// console.log("b:", b);

let fibonacci = {
  [Symbol.iterator]: function () {
    let num = 0;
    return {
      next: function () {
        num++;
        return {
          value: num,
          done: false,
        };
      },
    };
  },
};

for (let num of fibonacci) {
  if (num > 100) {
    break;
  }
  console.log(num);
}
