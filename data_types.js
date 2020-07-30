// Strings

var firstName = 'Matt';
var lastName = 'Johnson';

var fullName = firstName + ' ' + lastName;


console.log(fullName);

if (firstName == 'Matt') {
    console.log('Hi Matt');
}
else if (firstName == 'Aimee') {
    console.log('Hi Aimee');
}
else {
    console.log('Hello stranger');
}

var shoppingList = ['apples', 'bread', 'cheese', 'milk', 'eggs'];

console.log(shoppingList);

shoppingList.push('beer');


lastItem = shoppingList.pop();
console.log(lastItem);
lastItem = shoppingList.pop();
console.log(lastItem);