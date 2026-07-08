// Shallow copy -> means the new array created have arefrence to the original one;
// deep copy -> means the new array is copy of original array;

const arr1 = [1, 2, 3, 4, 5]

arr1.push(10);
arr1.push(20);

arr1.unshift(810); // pushes element at the front of arr;

console.log("Original array", arr1);

arr1.shift(); // removes the element from the front of array;

console.log(arr1);

console.log(arr1.includes(20)); // boolean;

console.log(arr1.join(""));// array elements joined without any element inbetween'
console.log(arr1.join(","));// elements joined with a , in between;


const modifiedArr1 = arr1.slice(0, 3);

console.log("Sliced array", modifiedArr1);
console.log(arr1);

const modifiedArr2 = arr1.splice(0,3); // Splice divides the array into 2 parts, the original array will have remaining range.

console.log("Spliced array", modifiedArr2);
console.log(arr1);