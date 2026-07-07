//Ways to define a string;

const name = "Anmol Kamboj"; // but we cannot use functions on it;

const gameName = new String("Clash of clans");// This gives us string as a object;

console.log(gameName);
console.log(gameName.__proto__);

//And as stinrg is a primitive data type, it creates a copy of this and makes changes
//we have so many functions of strings, let us try some;

console.log(gameName.toUpperCase()); 

const subStrName = gameName.substring(0, 4);
console.log(subStrName);

const strSlice = gameName.slice(-5, 10);// it does -> length - startIdx upto the endIdx;
//eg: 14+(-5) upto 10 -> 9 - 10 ch, so O/P: c
console.log(strSlice);

const carName = "     Seltos   "; // to remove leading and post spaces from string we use Trim;
console.log(carName.trim());

let url = "https://anmol.com/contact%%me";

console.log(url.replace('%%', '-'));
console.log(url.includes('anmol'));

let str = new String("my-name-is-anmol-kamboj");
console.log(str.split('-'));