"use strict";

let buttons = document.querySelectorAll('#card-question-button');

/*
    Allows cards to open and close
*/
buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let questions = e.currentTarget.parentElement;
        questions.classList.toggle("show-text");
    })
})