// var, let, const

/* var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name); */

// Init var

/* var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting); */

// letters, numbers, _, $
// Cannot start with number

// Multi word vars

/* var firstName = 'John'; // Camel case - Javascript convention
var first_name = 'Sara'; // Underscore - PHP convention
var FirstName = 'Tom'; // Pascal case - when creating a constructors or classes with ES6 */

// LET

/* let name; 
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);
 */

// CONST
const name = 'John Doe';
console.log(name);
// Cannot reassign
//name = 'Steve Smith';
// Have to assign a value
//const greeting;

const person = {
    name: 'John',
    age: 30
}

person.name = 'Sara';

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);