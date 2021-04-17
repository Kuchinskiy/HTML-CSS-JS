'use strict';

// GREETING
const greetingOnDisplay = document.querySelector('.greeting');

/*
Book: JavaScript for Children (author: Nick Morgan);
-->>> practice, testing, training - coding <<<--
*/

// type - STRING -- current task
/*
 * Превратите строку 'heLLo THERE how ARe yOu dOiNg?' в строку которая выглядела
 * бы вот так -->> "Hello there how are you doibg?"
 * BOOK: page 34-ua(40-ru)
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

// type - BOOLEAN & comparison operators (===, ><, >=, <=)
/*
* Закончите этот код:
let age = 12;
let accompanied = true;
...???
* который бы проверял возраст допустимый для просмотра фильма в кинотеатре, если
* 12 и более вход разрешается(Welcome), если меньше но в сопровождении взрослого - то также
* допускаются(Welcome with parents), в противном случае просмотр воспрещен(STOP);

* P.S - для проверки работоспособности кода пробуйте менять значения переменных 'age'на 11-13,
* а 'accompanied' с "true" на "false" убедитесь что ваш код все еще выдает правильные ответы.

* BOOK: page 45-ua(47-ru)
*/

let age = 11;
let equalOrOlderAge = 12;
let accompanied = true;

if (age >= equalOrOlderAge) {
    // console.log('Welcome');
} else if (accompanied) {
    // console.log('Welcome with parents');
} else {
    // console.log('STOP');
}
