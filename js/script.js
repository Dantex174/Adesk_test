const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function() {
    console.log('test');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('block');
});