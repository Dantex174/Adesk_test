// Код для меню бургера

const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function() {
    console.log('test');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('block');
});


//Код для F.A.Q.

const q1 = document.querySelector('#q1');
const a1 = document.querySelector('#a1');

q1.addEventListener('click', function() {
    console.log('test');
    q1.classList.toggle('select');
    a1.classList.toggle('action');
});

const q2 = document.querySelector('#q2');
const a2 = document.querySelector('#a2');

q2.addEventListener('click', function() {
    q2.classList.toggle('select');
    a2.classList.toggle('action');
});

const q3 = document.querySelector('#q3');
const a3 = document.querySelector('#a3');

q3.addEventListener('click', function() {
    q3.classList.toggle('select');
    a3.classList.toggle('action');
});

const q4 = document.querySelector('#q4');
const a4 = document.querySelector('#a4');

q4.addEventListener('click', function() {
    q4.classList.toggle('select');
    a4.classList.toggle('action');
});

const q5 = document.querySelector('#q5');
const a5 = document.querySelector('#a5');

q5.addEventListener('click', function() {
    q5.classList.toggle('select');
    a5.classList.toggle('action');
});

const q6 = document.querySelector('#q6');
const a6 = document.querySelector('#a6');

q6.addEventListener('click', function() {
    q6.classList.toggle('select');
    a6.classList.toggle('action');
});