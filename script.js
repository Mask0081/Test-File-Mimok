let A = [67, 23, 'Don', 'Jhon', 40, 'monday', 'true'];

//1// Just show the strings in a new array.

const strArray = A.filter(item => typeof item === 'string');
console.log(strArray);

//2// Create a new array from numbers and sort them.

const numArray = A.filter(item => typeof item === 'number');
const sort = numArray.sort((a, b) => a - b);
console.log(sort);

//3// Make the string array reverse.

const reverse = strArray.reverse();
console.log(reverse);

//4// Combine both array of numbers and strings.

const combine =  strArray.concat(numArray);
console.log(combine);

//5// Delete 3 items from the 2nd or 3rd item of the combined array.

combine.splice(3, 3);
console.log(combine);

//6// Show elements from A which are less than 100.

const less = A.filter(item => typeof item === 'number' && item<100);
console.log(less);

//7// From string array remove the last letter and add word 'str' before each of them.

const remove = strArray.map(item => 'str' + item.slice(0, -1));
console.log(remove);