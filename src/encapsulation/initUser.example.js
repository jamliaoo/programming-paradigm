import initUser from './initUser';

const user = initUser('Jack', 123);

console.log(user.name); // undefined
console.log(user.password); // undefined

console.log(user.login('May', 123)); // Invalid Credentials!
console.log(user.login('Jack', 123)); // Pass
