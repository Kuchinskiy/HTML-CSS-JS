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
// $('#main-heading').text(newHeadingText);

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

// Цепной вызов и анимация на jQuery, изменяя текст заголовка и включая его затухание
$('h2').text('This will fade out)').fadeOut(3000);
