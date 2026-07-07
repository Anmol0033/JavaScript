// There are two types of datatypes 1. Primitive
//                                  2. Non-Primitive;
//Privitive are stored in stack memory and each time a copy is passed;
//Non-primitive are stored in heap memory and each time a reference is passed;
// for eg. 

let user1 = 123;
let user2 = user1;
user1 = 12345;

console.log(user1, user2);// here user1 is updated but user2 have the same old value of user1;
//i.e. a copy of user1 is stored in user2 so if user1 changes user2 remains the same, whereas;

let userOneDetails = {
    name : "Anmol",
    age : 21,
    Address : "Radaur"
};

let userTwoDetails = userOneDetails;

console.log(userOneDetails.name);
console.log(userTwoDetails.name);

//But if i change name in userOneDetails then lets see what happens;

userOneDetails.name = "Anmol Kamboj";

console.log(userOneDetails.name);
console.log(userTwoDetails.name);

// See both names changes by changing only one because they both points to same memory location;