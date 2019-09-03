'use strict';

// Свойство: - .length; обращение к нему через точкую,как к любому другому;

// console.log('JavaScript is awesome'.length);

// Метод: - похож на обращение к свойству,НО в конце имеет пару скобок ();

// console.log('JavaScript is awesome'.toUpperCase());

/*==============================================================================*/

// Оператор (----- * typeOf--) возвращает ТИП значения присвоеного переменной :
// Возвращаемое значение это просто строка в которой указан тип.
 
// undefined
// let a;
// console.log('typeof a :', typeof a); // "undefined"

// null
// const b = null;
// console.log('typeof null :', typeof null); // "object"

// Number
// const c = 5;
// console.log('typeof c :', typeof c); // "number"

// String
// const message = 'JavaScript is awesome!';
// console.log('typeof message :', typeof message); // "string"

// Boolean
// const isActive = false;
// console.log('typeof isActive :', typeof isActive); // "boolean"

/*=====================================================================*/

// Вывод данных и взаимодействие с пользователем.

// Для вывода данных будем использовать 2 метода: 

//  (----- * console.log() и alert() ---);

const name = 'Colt';

// console.log('Name :', name);
// alert(name);

// const message = 'JavaScript is awesome';

// alert(message);


// Для получения данных от пользователя будем использовать еще 2 метода:

// (----- * prompt() и confirm() ---);


// confirm() — выводит модальное окно с сообщением, и 2 кнопки, Ok и Cancel. 
// При нажатии на Ok, на место вызова функции возвращается true, 
// при нажатии на Cancel возвращается false.

// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing); <-- сохраняем в переменную результат работы confirm;

// prompt() — выводит модальное окно с полем ввода и кнопками Ok и Cancel. 
// При Ok возвращает то, что было введено в поле ввода, при Cancel возвращает null.

// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName); // <-- сохраняем в переменную результат работы prompt;
// независимо, что вел пользователь, ВСЕГДА вернеться (----- * string--);

/*================================================================================*/

// Математические операторы.
// Важно запомнить правильное именование составляющих выражения. 
// + - * / % называются операторами, а то на что они применяются операндами.

// Сложение с заменной:

let value = 30;
value -= 10;

// console.log('value :', value);

/*================================================================================*/

// Операторы сравнения.
// Используются для сравнения значений. 
// Результатом своего выполнения возвращают БУЛЬ, true или false.

const x = 5;
const y = 10;
const z = 5;

// console.log('x > y:', x > y); // false
// console.log('x < y:', x < y); // true

// console.log('x <= z:', x <= z); // true

// console.log('x === y:', x === y); // false
// console.log('x === z:', x === z); // true

// console.log('x !== y:', x !== y); // true
// console.log('x !== z:', x !== z); // false

/*==================================================================================*/

// Приведение к числу.
// Для того чтобы сделать это явно, 
// !!!--используйте !!!-- функцию Number(val) --!!!, 
// передавая -- ей в (val) -- то, что надо привести к числу.

// Если значние не возможно привести к числу, 
// !!!--результатом будет специальное значение NaN (Not a Number)--!!!

const valueA = '7';

// console.log(Number(valueA));
// console.log(typeof Number(valueA));

const valueD = 'string random';

// console.log(Number(valueD));
// console.log(typeof Number(valueD));

// !!!--Методы Number.parseInt(val) и Number.parseFloat(val) 
// преобразуют строку символ за символом, пока это возможно. 

// Парсит из строки целое число

// console.log(Number.parseInt('7px')); // 7

// Парсит из строки дробное число

// console.log(Number.parseFloat('77.7em')); // 77.7

/*===============================================================================*/

// Проверка на число

// !!!--Для проверки на число можно использовать метод   Number.isNaN(val)
// Этот метод отвечает на вопрос "Это Not A Number?", и возвращает БУЛЬ:
//  true || false;

const validNumber = Number('77');

// console.log(Number.isNaN(validNumber));


const invalidNumber = Number('remember');

// console.log(Number.isNaN(invalidNumber));

/*==================================================================================*/

// Объект Math 
// !!!--Один из встроенных объектов в язык. Предоставляет набор методов для работы с числами.

//  Math.floor(num) - возвращает целое число, ОКРУГЛЯЯ в меньшую сторону, либо равное указанному:
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает целое число,ОКРУГЛЯЯ в большую сторону, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа, округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random());    // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1);     // случайное число от 1 до 10

/*================================================================================================*/

// String -- СТРОКА -- String

// !!!--String — это индексированный набор из нуля или более символов, заключенных в одинарные либо двойные кавычки.

const message = 'Welcome to hell';

// console.log('length :', message.length); // 15;
// console.log(message.indexOf('hell')); // 11;
// console.log(message.includes('ll')); // true;
// console.log(message.indexOf('r')); // -1;

/*==================================================================================================================*/
// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
/*-----*&& И---*/
const num = 40;

const result = num > 20 && num > 50;
// console.log(result); // false

// Для того чтобы оператор && вернул true, требуется чтобы все операнды были истинными (truthy). 
// !!!--Если хотябы один из операндов будет приведен к false, 
// !!!-- то результатом выражения будет этот операнд -- 'false' --!!!

// До первого 'false' && (этот операнд не вычисляется)

/*-----*|| ИЛИ---*/
const number = 77;

const results = number > 69 || number < 103;
// console.log(results); // true

// Оператор || возвращает одно из значений (операндов);
// !!!--Вернет 'true', ЕСЛИ хотя бы один из операндов был приведен к 'true';
// !!!--Если ни одно из условий не выполняется, получаем false.

//  До первого 'true' || (этот операнд не вычисляется)

