'use strict';

// Chapter 9 DOM & jQuery

// Используем встроеные в браузер(ы) методы DOM для работы с узлами древовидной структурой
const headingElement = document.getElementById('main-heading');
console.log(headingElement.innerHTML);

// const newHeadingText = prompt('Введите новый заголовок:');
// headingElement.innerHTML = newHeadingText;

// =======================================================================================

// Меняем текст заголовка с помощью jQuery
// const newHeadingText = prompt('Введите новый заголовок:');
// $('#main-heading').text(newHeadingText).fadeOut(3000);

// Добавляем в HTML-документ новый DOM-элемент, через метод 'append'
// Переданная ему строка '<p>Это новый параграф</p>' преобразуется в DOM-элемент
// $('body').append('<p>Это новый параграф</p>');

// Используем метод 'append' в цикле 'for' для добавления нескольких элементов
// for (let i = 0; i < 3; i += 1) {
// 	const hobby =prompt('Назови одно из своих хобби!');
// 	$('body').append("<p>" + hobby + "</p>");
// }

// Также это возможно через функцию
function yourHobby() {
	for (let i = 0; i < 3; i += 1) {
		const hobby =prompt('Назови одно из своих хобби!');
		$('body').append(`"<p>" ${hobby} "</p>"`);
	}
}

// yourHobby();

// Анимация элементов средствами jQuery вызывая для объекта метод fadeOut()
// $('#main-heading').fadeOut(3000);

// Цепной вызов(послідовне з`єднання) и анимация на jQuery,
// изменяя текст заголовка и включая его затухание при вызове нескольких методов подряд,
// при этом добавляя другие методы
// $('h1').slideUp(1000).slideDown(2000);
// $('h2').text('animation on JS ').fadeOut(3000).fadeIn(2000);

// Анимация с помощью цикла 'for' позволяет усилить эффект и повторять
// необходимое к-во раз, а с использованием функции мы сможем вызвать анимацию
// в определенный момент события
// for (let i = 0; i < 5; i += 1) {
// 	$('h1').fadeOut(1000).fadeIn(2000);
// }

// for (let i = 0; i < 5; i += 1) {
// 	$('h2').fadeOut(1000).slideDown(2000);
// }

function showAnimation() {
// Мигающий баннер
	for (let i = 0; i < 5; i += 1) {
		$('h1').fadeOut(1000).fadeIn(2000);
	}
// Исчезающий и сползающий сверху вниз баннер
	for (let i = 0; i < 5; i += 1) {
		$('h2').fadeOut(1000).slideDown(2000);
	}
}

// showAnimation();


// Exercises - tasks:

// Task-01-jQuery DOM
// #1. Перечислите своих друзей (и сделайте их лучшими!)
/*
Создайте массив с именами нескольких друзей.
В цикле "for" создайте для каждого имени по одному элементу <p> и добавьте
эти элементы в конец <body>,вызывая jQuery-метод append.

С помощью jQuery измените текст элемента h1, чтобы вместо
"Привет, мир!" там было "Мои друзья".

Теперь измените созданные вами элементы p, добавив после
каждого имени слово "лучший!". Подсказка: если найти сразу
все элементы p с помощью $("p"), метод append можно вызвать
для них всех разом.Используйте метод hide и метод fadeIn, 
чтобы имена плавно возникали на экране.
*/

const nameFriends = ['Jhon', 'Carl', 'Mahmud'];

for (let i = 0; i < nameFriends.length; i += 1) {
	$('body').append(`<p>${nameFriends[i]}, "лучший!"</p>`);
	$("p").last().hide().fadeIn((i + 1) * 5000);
}

const newHeadingText = 'My Friends';
$('#main-heading').text(newHeadingText);


// Task-02-jQuery DOM
// #2 Мигающий заголовок

// for (let i = 0; i < 1000; i += 1) {
// 	$('#main-heading').fadeOut(2000).fadeIn(2000);
// }


