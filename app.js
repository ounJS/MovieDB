"use strict";

const personalMovieDB = {
    coutn: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.coutn = +prompt('Сколько фильмов вы посмотрели?', '');
    
        while (personalMovieDB.coutn == '' || personalMovieDB.coutn == null || isNaN(personalMovieDB.coutn)) {
            personalMovieDB.coutn = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {

            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }

        }

    },

    detectPersonalLevel: function() {
        if (personalMovieDB.coutn < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.coutn >= 10 && personalMovieDB.coutn < 30 ) {
            console.log("Вы классический зритель");
        } else {
            console.log("Вы киноман");
        }
    },

    showMyDB:function(hidden) {
        if (!hidden) {
            return console.log(personalMovieDB);
        }
    },
    
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYpurGenres: function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }

};
