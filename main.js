const bananaDiv = document.getElementById('banana');
bananaDiv.innerHTML = 'im a banana';

let counter = 0;
counter = counter +1;
counter += 1;
counter++;

// counter = 3

console.log('counter: ', counter);

const greetingElement = document.getElementById('greeting');
firstName = 'charles';
lastName = 'woodring';

// greetingElement.innerHTML = 'Hello my name is '
+ firstName + ' ' + lastName;
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

// object shorthand notation
let name = 'callan'
let age = '1000000000000'

// let person = {
//    name: name,
//    age: age
// };

let person = {name, age};

console.log('person:' , person.name);