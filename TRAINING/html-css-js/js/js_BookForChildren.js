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

//let age = 11;
//let equalOrOlderAge = 12;
//let accompanied = true;

//if (age >= equalOrOlderAge) {
//	console.log('Welcome');
//} else if (accompanied) {
//	console.log('Welcome with parents');
//} else {
//	console.log('STOP');
//}

/*
* Напишите цикл for, который изменяет массив животных, делая
* их прекрасными! Например, если есть следующий массив :
* -->>> ["Кот", "Рыба", "Лемур", "Комодский варан"];

* то ваш цикл должен сделать его таким:
* ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур -
* прекрасное животное", "Комодский варан - прекрасное животное"]

P.S вам понадобится "переприсвоить" значения для
каждого индекса, то есть присвоить новые значения уже суще-
ствующим элементам. Например, сделать первое животное пре-
красным можно так:
animals[0] = animals[0] + " - прекрасное животное";

* BOOK page 130-ua,(108 ru)
*/

const animals = ['Cat', 'Fish', 'Lemur', 'Komodo dragon'];

for (let i = 0; i < animals.length; i += 1) {
  // animals[i] = animals[i] + ' - прекрасное животное'; // конкатынация строк
  animals[i] = `${animals[i]} - lovely animal`; // интерполяция и шаблонные строки
}
// console.log(animals);

/*
* Напишите генератор случайных строк. Для этого вам понадо-
* бится строка со всеми буквами алфавита:
-->>> "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
-->>> 'abcdefghijklmnopqrstuvwxyz';

* Начните создавать случайную строку с пустой строки
* (let randomString = ""). Затем добавьте цикл while и при
* каждом его повторе добавляйте в строку новый случайный
* символ — до тех пор, пока длина строки randomString не пре-
* высит шесть символов (или любой другой длины на ваш выбор).

P.S : Добавлять символ в конец строки можно с помощью оператора '+='.

* После того как цикл закончит работу, выведите получившуюся
* строку в консоль, чтобы полюбоваться на свое творение!

* BOOK page 130-ua,(108 ru)
*/

//const alphabet = "abcdefghijklmnopqrstuvwxyz";
//let randomString = '';

//while (randomString.length < 7) {
//	  randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
//	  randomString = randomString + alphabet[Math.floor(Math.random() * alphabet.length)];
//}
//console.log(`Your random string : ${randomString}!!!`);
//alert(`Ваши 7 случайных букв : ${randomString} !!!`);

/* 
const input = 'javascript is awesome';
let output = '';

* Перебирите все символы исходной строки -->>> 'javascript is awesome' в цикле -->>> 'for',
* встретив определенные символы добавьте к результирующей строке иные вместо них:
* -->>> "а" на "4", "е" на "3", "i" на "1" и "о" на "0".
* В противном случае добавляйте к результату исходный символ.

P.S : для добавления символа в конец строки используйте оператор "+=", 
необходимо "добавлять к результату" в пустую строку 'output' согласно условиям нужный символ.
Сделать в цикле обращение к символу строки можно через 'input[i]' и уже согласно условиям 
сделать замену символа с помощью оператора '+=' :))) Good Luck)

*/

// Вариант - 1 -->>> с добавлением дополнительной переменной
//const input = 'javascript is awesome';
//let output = '';

//for (let i = 0; i < input.length; i += 1) {

//let outputSign = input[i];

//	if (outputSign === 'a') {
//		output += 4;
//	} else if (outputSign === 'e') {
//		output += 3;
//	} else if (outputSign === 'i') {
//		output += 1;
//	} else if (outputSign === 'o') {
//		output += 0;
//	} else {
//		output += outputSign;
//	}
//}
//console.log(output);

// Вариант - 2 -->>> Без дополнительной переменной
//const inputSign = "javascript is awesome";
//let outputSign = "";
//for (let i = 0; i < inputSign.length; i += 1) {

//	  if (inputSign[i] === "a") {
//			outputSign += "4";
//	  } else if(inputSign[i] === "e") {
//			outputSign += "3";
//	  } else if (inputSign[i] === "i") {
//			outputSign += "1";
//	  } else if (inputSign[i] === "o") {
//			outputSign += "0";
//	  } else {
//			outputSign += inputSign[i];
//	}
//}
//console.log(outputSign);

//* Тернарный оператор вместо if...else используется при простых простых операциях

//const likesCats = confirm('Do you like cats?');
//const yourChoice = likesCats ? console.log('Super!') : console.log('Wrong!');

//* Как вариант 'code' который избыточен сам по себе при простой задаче
//const likesCats = confirm('Do you like cats?');
//* Излишняя синтаксическая инструкция if...else
// if (likesCats) {
//	console.log('Yes!!!');
// } else {
//	console.log('No!!!');
//}