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
  colour: "grey",
  name: "Space Grey",
  memory: "64GB",
  upfront: "",
  monthly: ""
}

// define functions

const setColour = (setNow) => {
  currentChoice.colour = setNow;
  $('#choicetext').text(currentChoice.name);
  let setString = ".colour" + setNow + "border";
  $(setString).css("border-color", "#3C676E");
  if (setNow != "grey") {
    $('.colourgreyborder').css("border-color", "white");
  }
  if (setNow != "gold") {
    $('.colourgoldborder').css("border-color", "white");
  }
  if (setNow != "silver") {
    $('.coloursilverborder').css("border-color", "white");
  }
}

const updatePrices = () => {
  for (let i = 0; i < 6; i++) {
    if ((currentChoice.name == dataStore.deviceSummary[i].colourName) && (currentChoice.memory == dataStore.deviceSummary[i].memory)) {
      currentChoice.upfront = dataStore.deviceSummary[i].priceInfo.hardwarePrice.oneOffDiscountPrice.gross;
      currentChoice.monthly = dataStore.deviceSummary[i].priceInfo.bundlePrice.monthlyPrice.gross;
      if (currentChoice.upfront) {
        $('#upfrontcost').text("£" + currentChoice.upfront);
      } else {
        $('#upfrontcost').text("£0");
      }
      $('#monthlycost').text("£" + currentChoice.monthly);
      return;
    }
  }
}

// check to see if any buttons have been clicked and update DOM accordingly

$('.colourgold').on('click', function () {
  currentChoice.name = "Gold";
  $('#currentimage').attr("src", "images/Apple_iPhone_8_Gold-full-product-front.png");
  setColour("gold");
  updatePrices();
});

$('.coloursilver').on('click', function () {
  currentChoice.name = "Silver";
  $('#currentimage').attr("src", "images/Apple_iPhone_8_Silver_WS2-full-product-front.png");
  setColour("silver");
  updatePrices();
});

$('.colourgrey').on('click', function () {
  currentChoice.name = "Space Grey";
  $('#currentimage').attr("src", "images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png");
  setColour("grey");
  updatePrices();
});

$('.capacityimage64').on('click', function () {
  currentChoice.memory = "64GB";
  $('.capacityimage64').css("border-color", "#3C676E");
  $('.capacityimage256').css("border-color", "white");
  updatePrices();
});

$('.capacityimage256').on('click', function () {
  currentChoice.memory = "256GB";
  $('.capacityimage256').css("border-color", "#3C676E");
  $('.capacityimage64').css("border-color", "white");
  updatePrices();
});