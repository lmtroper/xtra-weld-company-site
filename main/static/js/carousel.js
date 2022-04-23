const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const carouselWidth = document.querySelector('.carousel-container').offsetWidth;
const track = document.querySelector('.track');
let transform = 0;
let lastPageX = 0;

let index = 0;

window.addEventListener('resize', () => {
    carouselWidth = document.querySelector('.carousel-container').offsetWidth;
});

next.addEventListener('click', () => {
    index++;
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
    prev.classList.remove('is-hidden');

    if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
        next.classList.add('is-hidden');

    };
})

prev.addEventListener('click', () => {
    index--;
    next.classList.remove('is-hidden');
    if (index === 0) {
        prev.classList.add('is-hidden');
    };

    track.style.transform = `translateX(-${index * carouselWidth}px)`;


})