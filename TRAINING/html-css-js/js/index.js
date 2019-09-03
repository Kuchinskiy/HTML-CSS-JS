// DEFAULTS
'use strict';


// PRACTICE

// var name = 'Nick';
// console.log('Hello ' + name);
// if (name.length > 7) {
//     console.log('Wow, you have a REALLY long name!');
// } else {
//     console.log('Your name isn`t very long')
// }


// var lemonChicken = true;
// var beefWithBlackBean = false;
// var sweetAndSourPork = true;

// if (lemonChicken) {
//     console.log('Great! I`m having lemon chicken!');
// } else if (beefWithBlackBean) {
//     console.log('I`m having the beef.');
// } else if (sweetAndSourPork) {
//     console.log('OK, I`ll have the pork.');
// } else {
//     console.log('Well, I guess I`ll have rice then.');
// }


// PRACTICE (page 120, part A )

// var name = 'Harry';

// var isNotMyName = 'Nick';
// console.log(isNotMyName === name);

// var myNameIs = 'Harry';
// console.log(myNameIs === name);

// var isNotName = 'Dave';
// console.log(isNotName === name);


// if (isNotMyName === name) {
//     console.log('Hi');
// } else if (isNotName === name) {
//     console.log('Hello');
// } else if (isNotMyName === name) {
//     console.log('Hello me!');
// } else {
//     console.log('Hello stranger');
// }
/*=====================================================================*/

/*+++++++++++++++++++++++ ARRAY && METHOD +++++++++++++++++++++++++++++*/

// Перебор массивов с их вариантами:

// const arr = [5, 7, 9, 12];

// через цикл "for...of"_ это первый вариант:

// for (let elem of arr) {
//     console.log(elem);
// }

// метод и цикл (method()) --some()-- && (cycle)--for...of-- :

// const numbers = [34, 45, 56, 78, 89, 78];

// numbers.some(number => {
//     if (number === 78) {
//         console.log('double number');
//         return true;
//     }
// });

//  Итог цикла, анологичен и идентичн методу  (some) :

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 78) {
//         console.log('double number');
//         break;
//     }
// }
/*============================================================*/

// Проверяем в массиве числа больше 10 и если такие имеются
// возвращаем буль(логическая переменная) "true" :

// const array = [56, 78, 34, 89, 69, 23];

// const result = array.some(element => element > 10);
// console.log('result :', result);

/*=============================================================*/

/*---------map() method*/ 
/*перебор массива и создания нового на основание изначального*/

// const array = [56, 0, 34, 8, 9, 2];
// const newArray = array.map(element => element +5);

// console.log('array :', array);
// console.log('newArray :', newArray);

/*выбрать из массива числа меньше 10, позволяет метод --filter*/

/*---------filter() method*/ 
// const filterArray = array.filter( element => element < 10);
// console.log('filterArray :', filterArray);

/*=============================================================*/

/*---------reduce() method*/ 
// позволяет объединить все элементы массива в одно значение;

/*узнать сумму всех чисел в массиве*/

// Схема работы метода и его алгоритм :

// 1. Цель - найти сумму в массиве 'numbers' ;
// 2. Начальное значение - устанавливаем сами -> 0 ;
// 3. Промежуточное значение - вычисляется на каждой итерации
//    по "правилу" ;
// 4. "Правило" - устанавливаем сами -> пром.знач. + элем.массива ;

// const numbers = [8, 0, 99, 123, 7]; 

// const total = numbers.reduce((prevValue, currentElem) => {
    
    // Выводит в таблицу с подробным описанием по каждой  итерации :
//     const table = { prevValue, currentElem, 'sum': prevValue + currentElem };
//     console.table(table);

//     return prevValue + currentElem;
// }, 0 );

// console.log('total :', total);

