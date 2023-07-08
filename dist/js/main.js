
// Linking to the .css file not to the html tags
const slider = document.querySelector('#testimonials-page .container .carousel .slider');
const carousel = document.querySelector('#testimonials-page .container .carousel')

const prev = document.querySelector('.arrow-prev');
const next = document.querySelector('.arrow-next');

prev.addEventListener('click', function(){
    if (direction === -1){
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(50%)';
});

next.addEventListener('click', function(){
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-50%)';
});

slider.addEventListener('transitionend', function(){
    if (direction === -1){
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1){
        slider.prepend(slider.lastElementChild);
    }
    
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function(){
        slider.style.transition = 'all 0.5s';
    })
    
})
