"use strict";

// const name = prompt('Как вас зовут?');
// console.log('Привет, ' + name);


// const likesCats = confirm("Тебе нравятся коты или собаки?");
// likesCats 
//   ? console.log("Это здорово ЧТО ТЫ ЛЮБИШЬ животных)))")
//   : console.log("Ничего страшного, все равно ты МОЛОДЕЦ)");


/*===========GAME=============*/

const words = [
    'собака',
    'кошка',
    'горилла',
    'бегемот'
];
// console.log(words);

const word = words[Math.floor(Math.random() * words.length)];

let ansverArr = [];
for (let i = 0; i < word.length; i++) {
    ansverArr[i] = '_';
}

const ramainingLetters = word.length;
