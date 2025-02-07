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

function checkFirstTwoImagesPosition(image1 , image2) {
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
checkFirstTwoImagesPosition(imageOne ,imageTwo);

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

checkFirstTwoImagesPosition(imageFour ,imageFive);


window.addEventListener("scroll", function () {
  checkFirstTwoImagesPosition(imageOne ,imageTwo);
  checkFirstTwoImagesPosition(imageFour ,imageFive);
  checkThirdImagePosition();
});

checkThirdImagePosition();
