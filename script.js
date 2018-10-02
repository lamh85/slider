var rgbArray = [0, 0, 0];

var rgbArrayIndex = {
  red:    0,
  green:  1,
  blue:   2
}

var containerElement = document.querySelector(".container")

var styleValueBuilder = function () {
  return "rgb(" + rgbArray.join(",") + ")";
}

var styleUpdater = function () {
  var rgbValue = styleValueBuilder()
  containerElement.style.background = rgbValue;
}

var rgbUpdater = function(dimension, value) {
  var index = rgbArrayIndex[dimension];
  rgbArray[index] = value;
  console.log(rgbArray);
}

// Controller --------------------------------

var controller = function(dimension, value) {
  rgbUpdater("red", value);
  styleUpdater()
}

// Event Handling ----------------------------

var sliderRed = document.querySelector(".slider.red");

var listener = function(event) {
  var value = event.target.value;
  controller("red", value);
}

sliderRed.addEventListener("input", listener);