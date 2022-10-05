import JuniorEngineer from './JuniorEngineer';

const engineer = new JuniorEngineer('Jack', 123);

console.log(engineer.name); // undefined
console.log(engineer.password); // undefined

console.log(engineer.login('May', 123)); // Invalid Credentials!
console.log(engineer.login('Jack', 123)); // Pass

engineer.fixBug(); // Hmm...let's google
