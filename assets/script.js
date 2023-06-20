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

/* for (const slide of slides) {
  console.log(slide.image);
} */
 



// Variables

const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');


/* console.log(bannerImg)
console.log(tagLine)
console.log(dotsContainer) */



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



function goToPreviousSlide() {
	// console.log('I was clicked, I am previous!'); 
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
//   console.log(currentSlideIndex);
  updateSlide();
}

function goToNextSlide() {
	//   console.log('I was clicked, I am next!');
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//    console.log(currentSlideIndex);
  updateSlide();
}



// Add event listeners to the arrow buttons
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');



arrowLeft.addEventListener('click', goToPreviousSlide);

arrowRight.addEventListener('click', goToNextSlide);


slides.forEach(function (slide, index) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', function () {
    currentSlideIndex = index;
    updateSlide();
  });
  dotsContainer.appendChild(dot);
});


// Initialize the slideshow
updateSlide();
