// check JS running
console.log("javascript connected");

// check jQuery running
if (jQuery) {
  console.log("jquery working");
} else {
  console.log("jquery not working");
}

// set global variables
var currentChoice = {
  colour: "Grey",
  size: "64GB",
  upfront: "",
  monthly: ""
}

// define functions

const setColour = (setNow) => {
  currentChoice.colour = setNow;
  let setString = ".colour" + setNow + "border";
  $(setString).css("border-color", "#3C676E");
  if (setNow != "Space Grey") {
    $('.colourgreyborder').css("border-color", "white");
  }
  if (setNow != "Gold") {
    $('.colourgoldborder').css("border-color", "white");
  }
  if (setNow != "Silver") {
    $('.coloursilverborder').css("border-color", "white");
  }
}

const updatePrices = () => {
  for (let i = 0; i < 6; i++) {
    if ((currentChoice.colour == dataStore.deviceSummary[i].colourName) && (currentChoice.size == dataStore.deviceSummary[i].memory)) {
      currentChoice.upfront = dataStore.deviceSummary[i].priceInfo.hardwarePrice.oneOffDiscountPrice.gross;
      currentChoice.monthly = dataStore.deviceSummary[i].priceInfo.bundlePrice.monthlyPrice.gross;
      $('#upfrontcost').text(currentChoice.upfront);
      $('#monthlycost').text(currentChoice.monthly);
      return;
    }
  }
}

// check to see if any buttons have been clicked and update accordingly

$('.colourgold').on('click', function () {
  $('#currentimage').attr("src", "images/Apple_iPhone_8_Gold-full-product-front.png");
  $('#choicetext').text("Gold");
  setColour("Gold");
  updatePrices()
});

$('.coloursilver').on('click', function () {
  $('#currentimage').attr("src", "images/Apple_iPhone_8_Silver_WS2-full-product-front.png");
  $('#choicetext').text("Silver");
  setColour("Silver");
  updatePrices();
});

$('.colourgrey').on('click', function () {
  $('#currentimage').attr("src", "images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png");
  $('#choicetext').text("Space Grey");
  setColour("Space Grey");
  updatePrices();
});