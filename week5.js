// 1)შექმენით ობიექტი სახელად Person,ობიექტს ექნება სახელი,გვარი,ასაკი.
// let person = {
// name: "lasha",
// lastname: "bokuchava",
// age: 26,
// };
// console.log(person);
// 2)დაამატეთ ობიექტში  ფუნქცია სახელად  sayHello რომელიც დაპრინტავს ობიექტში 
// სახელის values.
// let person = {
//     name: "lasha",
//     lastname: "bokuchava",
//     age: 26,
//     sayHello: function() {
//         return this.name;
//     }
// };

// console.log(person.sayHello()); 
// 3) წაშალეთ ასაკის property.
// let person = {
//     name: "lasha",
//     lastname: "bokuchava",
//     age: 26,
// };
// delete(person.age)
// console.log(person); 

// 4)დაამატეთ ობიექტში job.
// let person = {
//     name: "lasha",
//     lastname: "bokuchava",
//     age: 26,
// };
// person.job="developer"
// console.log(person)
// 5)დაამატეთ ობიექტში ფუნქცია რომელიც დააბრუნებს ობიექტის job-ის სიგრძეს.
// let person = {
//     name: "lasha",
//     lastname: "bokuchava",
//     age: 26,
//     job: "developer",
//     leng: function() {
//         return this.job.length;
//     }
// };

// console.log(person.leng()); 

// 6)ამის შემდეგ დაპრინტეთ უბრალოდ ობიექტში არსებული მეთოდების რაოდენობა.
// let person = {
//     name: "lasha",
//     lastname: "bokuchava",
//     age: 26,
//     job: "developer",
// }
// let count = 0;
// for(let key in person) {
//     ++count;
// }
// console.log(count);
// 7)გაარკვიეთ ,აქვს თუარა ობიექტს gender property ,თუ არაქვს ,მაშინ შექმენით მეთოდი .
// let person = {
//     name: "lasha",
//     lastname: "bokuchava",
//     age: 26,
//     job: "developer",  
// }
// let
// Gender=false;
//  for(let key in person){
// if(key=="gender"){
// Gender=true;
//  }
// }
// if (Gender==false){
// person. gender="male" 
// };
// console. log (person)
// 8)გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property.
// let person = {
//     name: "lasha",
//     lastname: "bokuchava",
//     age: 26,
//     job: "developer",  
// }
// for (const property in person) {
//      console.log(`${property}`);
//   }
  
// 9)გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value.
// let person = {
//     name: "lasha",
//     lastname: "bokuchava",
//     age: 26,
//     job: "developer",  
// }
// for (const property in person) {
//      console.log(`${person[property]}`);
//   }
  