const slides = [
  {
    image: './assets/images/slideshow/slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: './assets/images/slideshow/slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: './assets/images/slideshow/slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: './assets/images/slideshow/slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];

// verification of the paths ok

/* for (const slide of slides) {
  console.log(slide.image);
} */

// Variables connecting to Html

const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');

// verification if there is a contact with DoM

/* console.log(bannerImg)
console.log(tagLine)
console.log(dotsContainer) */

// for keep track of the current index of the display image

let currentSlideIndex = 0;

function updateSlide() {
  const currentSlide = slides[currentSlideIndex];
  bannerImg.src = currentSlide.image;
  tagLine.innerHTML = currentSlide.tagLine;

  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

// function to be called upon when the click event on the arrow prev happens
function goToPreviousSlide() {
  // console.log('I was clicked, I am previous!');
  // it  assures that  image begin the count from 0, 3, 2, 1 count down
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  //   console.log(currentSlideIndex);

  updateSlide();
}

// function to be called upon when the click event on the arrow next happens
function goToNextSlide() {
  //   console.log('I was clicked, I am next!');
  // it  assures that  image begin the count from 0, 1, 2, 3 count up
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  //    console.log(currentSlideIndex);

  updateSlide();
}

// creating the arrows variables
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Add event listeners to the arrow buttons with a click event,
arrowLeft.addEventListener('click', goToPreviousSlide);

arrowRight.addEventListener('click', goToNextSlide);

slides.forEach(function (slide, index) {
  //creation of the div with class of "dot" which is already in the css rules
  const dot = document.createElement('div');
  dot.classList.add('dot');
  // Add event listeners to the dots
  dot.addEventListener('click', function () {
    currentSlideIndex = index;
    updateSlide();
  });
  // append the div to the parent div which is already in the html
  dotsContainer.appendChild(dot);
});

// Initialize the slideshow
updateSlide();
