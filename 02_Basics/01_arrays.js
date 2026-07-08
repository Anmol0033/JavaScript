// Shallow copy -> means the new array created have arefrence to the original one;
// deep copy -> means the new array is copy of original array;
// Arrays in JS are objects, also the can have hetrogeneous values unlike c, c++;

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

const arr2 = ['doraemon', 'nobita', 'gian'];


//we use concat because if we push arr2 into arr1 then the array will be pushed at last idx;
const mergeArr = arr1.concat(arr2); // Hetrogeneous array
console.log(mergeArr);

//spread operator

const useSpread = [...arr1, ...arr2]; // give alone alone value of each element at each index, and we are storing it in a new array;

console.log(useSpread);

//flating an array, i.e. creating a sinle array from various subarrays of an array;

const nestedSubarrays = [1,2,3,[4,5,6,], 'nobita', [10,20,[30,40]]];
const flatArray = nestedSubarrays.flat(2);// here 3 is the depth or subarray 
const flatArray1 = nestedSubarrays.flat(1);// here 3 is the depth or subarray 
console.log(flatArray);
console.log(flatArray1);

console.log(Array.isArray("Anmol")); // tells that input is array or not
console.log(Array.isArray(['Anmol'])); // tells that input is array or not
console.log(Array.from("Anmol"));// makes an array from strings or numbers etc;