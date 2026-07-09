  const obj = Object(); // Singleton object

  obj.name = "Anmool";

  console.log(obj);


const obj1 = {
    name : "Anmol Kamboj", // here in objects the key is internally assu,ed to be string
    address : "Radaur" // so, name, address are visualised as strings by js internally
};

console.log(obj1);

const obj2 = 
{
    'Full Name' : 'Anmol Kamboj',
    'Address' : 'Radaur'
}

console.log(obj2);

// So to access the keys of obj where key is not written as string, we do
console.log(obj1.name);

//To access the key written as string in obj we do,
console.log(obj2['Address']);

// assume 2 or more objects and we want to concat. them

const details1 = {
    name : "Anmol"
};
const details2 = {
    Address : "Radaur"
};


const combineDetails = Object.assign({}, details1, details2); // option 1 to concat
console.log(combineDetails);

//2nd option is by using spread operator

const combineUsingSpread = {...details1, ...details2}; // as spread opeartor seperates each value one by one from objects;
console.log(combineUsingSpread)