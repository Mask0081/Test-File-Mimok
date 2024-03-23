let A = [50, 107, 'jack', 83, 'killer', 'son', true];

let stringsArray = A.filter(element => typeof element === 'string');
console.log(stringsArray);

const B = [50, 107, 'jack', 83, 'killer', 'son', true];

let sortedNumbers = B.filter(item => typeof item === 'number').sort ((a, b) => a - b);
console.log(sortedNumbers);

const C = [50, 107, 'jack', 83, 'killer', 'son', true];
let reversedStringArray = C.filter(item => typeof item === 'string').reverse();
console.log(reversedStringArray);

let D = [50, 107, 'jack', 83];
let E = ['killer', 'son', true];

let combinedArray = D.concat(E);
console.log(combinedArray);

const F = [50, 107, 'jack', 83, 'killer', 'son', true];

F.splice(5, 3);
console.log(F);

const G = [50, 107, 'jack', 83, 'killer', 'son', true];

let lessThan100 = G.filter(item => typeof item === 'number' && item < 100);
console.log(lessThan100);

const H = [50, 107, 'jack', 83, 'killer', 'son', true];

let modifiedArray = H.map(item => typeof item === 'string' ? 'str' + item.slice(0, -1) : item);
console.log(modifiedArray);