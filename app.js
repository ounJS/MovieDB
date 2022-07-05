"use strict";

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    coutn: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

    for ( let i = 0; i < 2; i++ ) {

         const a = prompt('Один из последних просмотренных фильмов?', ''),
               b = prompt('На сколько оцените его?', '');

        if ( a != null && b != null && a != '' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

    }
    
}

rememberMyFilms();

function detectPersonalLevel() {

    if (personalMovieDB.coutn < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.coutn >= 10 && personalMovieDB.coutn < 30 ) {
        console.log("Вы классический зритель");
    } else {
        console.log("Вы киноман");
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        return console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYpurGenres() {

    for (let i = 1; i <= 3; i++) {
        
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

    }
}

writeYpurGenres();

