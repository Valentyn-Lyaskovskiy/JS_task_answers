"use strict";

let numberOfFilms;

const obj = {
  id: 2,
  film: "",
  counter: numberOfFilms,
};

function tell() {
  numberOfFilms = +prompt("How many films have you seen lately?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films have you seen lately?", "");
  }
  alert(numberOfFilms);
}

tell();
