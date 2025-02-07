console.log("Script file works!");

// let secondSection = document.querySelector("main .section-2");
// let firstImage = secondSection.querySelector("img:nth-child(1)");
// let secondImage = secondSection.querySelector("img:nth-child(2)");
// let thirdImage = secondSection.querySelector("img:nth-child(3)");

// let testButton = secondSection.querySelector('button');

// testButton.addEventListener('click' , ()=>{
//     firstImage.style.opacity = '0';
//     secondImage.style.opacity = '1';

// })

/// First Section Images Animations ///

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
console.log(thirdImage.src);
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

/// Move titlecontainer onscroll

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
  console.log(roundedTop);

  if (roundedTop < 70) {

    titleContainer.style.top = roundedTop + 1 + "%";
  }
}

function handleScrollingUp(){

  const parent = titleContainer.offsetParent || titleContainer.parentElement;
  const topPx = titleContainer.offsetTop;
  const parentHeight = parent.clientHeight;
  const topPercentage = (topPx / parentHeight) * 100;
  let roundedTop = Math.round(topPercentage);


  console.log(titleContainer.getBoundingClientRect())

  if(titleContainer.getBoundingClientRect().top >= 50){
    if(70 >= roundedTop && 40 <= roundedTop){
      titleContainer.style.top = roundedTop - 1 + "%";
  
    }
  }

}



let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    handleScrollingDown();
  } else if (scrollTop < lastScrollTop) {
    handleScrollingUp();
  }

  lastScrollTop = scrollTop;
});
