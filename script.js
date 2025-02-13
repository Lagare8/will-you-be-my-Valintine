document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with class "image1"
  var images = document.querySelectorAll(".image1");

  // Function to set random position for an element
  function setRandomPosition(element) {
    element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  }

  // Set random position for each image
  images.forEach(function (image) {
    setRandomPosition(image);
  });
});

function angry() {
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "./resources/sad1.gif";
  absImg.style.display = "flex";

  images.forEach(function (image) {
    image.src = "./resources/sad.gif";
  });
}

function happy() {
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  absImg.style.display = "flex";
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "./resources/happy3.gif";

  images.forEach(function (image) {
    image.src = "./resources/heart.gif";
  });
}

const sadCat = [
  "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
  "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
  "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
  "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
  "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
  "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
];

const blackmail = [
  "Please",
  "I'm begging you",
  "I'm crying",
  "I'm sad",
  "HUHUHUHU",
  "Please Say Yes",
  "I'm gonna cry",
];

function normal() {
  var absImg = document.getElementById("absImg");
  absImg.style.display = "none";
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "./resources/happy1.gif";
}

let counter = 0;

function no() {
  counter++;
  let sadMusic = document.getElementById("sadMusic");
  let happyMusic = document.getElementById("happyMusic");
  happyMusic.pause();
  sadMusic.play();
  let model = document.getElementById("model");
  model.style.display = "none";
  setTimeout(() => {
    model.style.display = "flex";
    const modelImage = document.getElementById("modelImg");
    const modelText = document.getElementById("modelText");
    modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
    modelText.innerText = blackmail[Math.floor(Math.random() * blackmail.length)];
  }, 100);
}

function yes() {
  if (counter >= 3) {
    let model = document.getElementById("model2");
    let model2 = document.getElementById("model");
    let sadMusic = document.getElementById("sadMusic");
    let happyMusic = document.getElementById("happyMusic");

    // Stop sad music and play happy music
    sadMusic.pause();
    happyMusic.play();

    // Hide the first model and show the second one immediately
    model2.style.display = "none";
    model.style.display = "flex";

    const wedate = document.getElementById("wedate");
    const btns = document.getElementById("btns");

    // Hide the buttons and update the text
    btns.style.display = "none";
    wedate.innerText = "Happy Valetines day Bilay ILSM<33";
  } else {
    alert("At least show some emotions, cutie. Don't just say yes directly.");
  }
}

function ly2() {
  let model = document.getElementById("model2");
  model.style.display = "none";
  let model2 = document.getElementById("model");
  model2.style.display = "none";
}
