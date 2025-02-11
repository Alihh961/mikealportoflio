console.log("JS file works!");

// Oblige the page to go to the top eveytime the user reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = "manual";
}

/// First Section Images Animations ///
if(true){
/// First Two Images

let imageOne = document.getElementById("imageOne");
let imageTwo = document.getElementById("imageTwo");

function checkFirstTwoImagesPosition(image1, image2) {
  const rect = image1.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight) {
    setTimeout(() => {
      image1.style.transform = "translateX(0)";
      image1.style.opacity = "1";

      image2.style.transform = "translateX(0)";
      image2.style.opacity = "1";
    }, 500);
  }
}
checkFirstTwoImagesPosition(imageOne, imageTwo);

//

// Third Image

let thirdImage = document.getElementById("imageThree");
function checkThirdImagePosition() {
  const rect = thirdImage.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight) {
    setTimeout(() => {
      thirdImage.classList.add("fade-in");
    }, 500);
  }
}

/// Last two images

let imageFour = document.getElementById("imageFour");
let imageFive = document.getElementById("imageFive");

checkFirstTwoImagesPosition(imageFour, imageFive);

window.addEventListener("scroll", function () {
  checkFirstTwoImagesPosition(imageOne, imageTwo);
  checkFirstTwoImagesPosition(imageFour, imageFive);
  checkThirdImagePosition();
});

checkThirdImagePosition();
}

/// Move titlecontainer onscroll
if(true){
  const titleContainer = document.querySelector(".title-container");
  const wrapper = document.querySelector(".intro-video-container");
  
  function handleScrollingDown() {
    // const rect = titleContainer.getBoundingClientRect();
    // const wrapperRect = wrapper.getBoundingClientRect();
    // const windowHeight = window.innerHeight;
  
    const parent = titleContainer.offsetParent || titleContainer.parentElement;
    const topPx = titleContainer.offsetTop;
    const parentHeight = parent.clientHeight;
    const topPercentage = (topPx / parentHeight) * 100;
    let roundedTop = Math.round(topPercentage);
  
    if (roundedTop < 70) {
      titleContainer.style.top = roundedTop + 1 + "%";
    }
  }
  
  function handleScrollingUp() {
    const parent = titleContainer.offsetParent || titleContainer.parentElement;
    const topPx = titleContainer.offsetTop;
    const parentHeight = parent.clientHeight;
    const topPercentage = (topPx / parentHeight) * 100;
    let roundedTop = Math.round(topPercentage);
  
  
  
    if (titleContainer.getBoundingClientRect().top >= 50) {
      if (70 >= roundedTop && 40 <= roundedTop) {
        titleContainer.style.top = roundedTop - 1 + "%";
      }
    }
  
    if (window.scrollY === 0) {  
      titleContainer.style.top = "40%";
  }
  }
  
}

/// Changing background Images on scroll

// init controller
var controller = new ScrollMagic.Controller();


// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#section1"})
	.setClassToggle("#image1", "active") // add class toggle
    .addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#section1"})
	.setClassToggle("#section1", "active") // add class toggle
    .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#section2"})
	.setClassToggle("#image2", "active") // add class toggle
    .addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#section2"})
    .setClassToggle("#section2", "active") // add class toggle
    .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#section3"})
	.setClassToggle("#image3", "active") // add class toggle
    .addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#section3"})
	.setClassToggle("#section3", "active") // add class toggle
    .addTo(controller);




/// jQuery code for customers section

$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});





