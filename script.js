'use strict';

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const Slide1 = document.getElementById('1');
const Slide2 = document.getElementById('2');
const Slide3 = document.getElementById('3');
const nav = document.querySelector('.nav');
// const mediaMode = document.querySelector('@media');
// implemˇenting sliders


if (screen.width >=)
const maxSlide = slides.length;
let curSlide = 0;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `transLateX(-${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener('click', prevSlide);

btnLeft.addEventListener('click', nextSlide);

nav.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    console.log('tap');
    const [click, i] = e.target.getAttribute('href');
    goToSlide(i - 1);
  }
});

console.log(maxSlide);
