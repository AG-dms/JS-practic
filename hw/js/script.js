/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// Задание 1
let adv = document.querySelectorAll('.promo__adv img');
console.log(adv);

adv.forEach(item => {
    item.remove();
});


// Задание 2
let mainGenre = document.querySelector('.promo__genre');
console.log(mainGenre);

mainGenre.textContent = 'ДРАМА';


// Задание 3
let poster = document.querySelector('.promo__bg');
console.log(poster);
poster.style.backgroundImage = 'url("img/bg.jpg")'; // при комбинировании кавычек, нужно использовать разные. Путь до картинки указывается относительно html файла

//Задание 4/5

let films = document.querySelector('.promo__interactive-list');
films.innerHTML = '';

movieDB.movies.sort();
console.log(movieDB.movies);

movieDB.movies.forEach((item, i) => {
    films.innerHTML += `
        <li class="promo__interactive-item">${i+1}) ${item}
            <div class="delete"></div>
        </li>
    `;
});