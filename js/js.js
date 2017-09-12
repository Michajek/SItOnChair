//Zadanie 1
var navDown = document.querySelector('#main-nav-down');
var navDown2 = document.querySelector('.main-nav-submenu');
navDown.addEventListener('mouseover', function() {
    navDown2.style.opacity = '1';
    navDown2.style.visibility = 'visible';
});
navDown.addEventListener('mouseout', function() {
    navDown2.style.opacity = '0';
    navDown2.style.visibility = 'hidden';
});
//Zadanie 2

var picture = document.querySelectorAll('.picture-cnt');
var pictureDescription = document.querySelectorAll('.picture-cnt-description');

picture[0].addEventListener('mouseover', function() {
    pictureDescription[0].style.opacity = '0';
})
picture[1].addEventListener('mouseover', function() {
    pictureDescription[1].style.opacity = '0';
})
picture[0].addEventListener('mouseout', function() {
    pictureDescription[0].style.opacity = '1';
})
picture[1].addEventListener('mouseout', function() {
    pictureDescription[1].style.opacity = '1';
})

// Zadanie 3
var nextButton = document.querySelector('.right');
var prevButton = document.querySelector('.left');
var slides = document.querySelectorAll('.slide');
var counter = 0;
slides[0].classList.add("active");

  nextButton.addEventListener('click', function () {
    if (counter == slides.length-1) {
      counter--
    }
    slides[counter].classList.remove("active");
    counter++
    slides[counter].classList.add("active");

  });

  prevButton.addEventListener('click', function () {
    if (counter == 0) {
      counter++
    }
    slides[counter].classList.remove("active");
    counter--
    slides[counter].classList.add("active");

  })
