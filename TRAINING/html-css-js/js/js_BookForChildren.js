'use strict'

/*
Book: JavaScript for Children (author: Nick Morgan);
-->>> practice, testing, training - coding <<<--
*/

// type - STRING -- current task
/*
* Превратите строку 'heLLo THERE how ARe yOu dOiNg?' в строку которая выглядела
* бы вот так -->> "Hello there how are you doibg?"
*/

// Вариант - 1 пошаговое выполнение с помощью дополнительных переменных.

let stringRandom = 'heLLo THERE how ARe yOu dOiNg?';
// console.log(stringRandom);
let lowCaseString = stringRandom.toLowerCase();
// console.log(lowCaseString);

let upCaseFirstLetter = lowCaseString.slice(0, 1).toUpperCase();
// console.log(upCaseFirstLetter);

let restOfString = stringRandom.slice(1).toLowerCase();
// console.log(restOfString);

let totalString = upCaseFirstLetter + restOfString;
// console.log(totalString);


// Вариант - 2 более упрощенная форма, но сложная инструкция для понимания новичка.
let str = 'hEllO wORld';
// console.log(str);

let newString = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log(newString);


