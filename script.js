// States -------------------------------

var rgbArray = [255, 255, 255];

var rgbArrayIndex = {
  red:    0,
  green:  1,
  blue:   2
}

var containerElement = document.querySelector(".container")

var rgbCodeElement = document.querySelector(".rgb-code")

// Functions ---------------------------

var renderRgbCode = function() {
  rgbCodeElement.innerHTML = rgbArray.join(", ")
}

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
}

// Controller --------------------------------

var controller = function(dimension, value) {
  rgbUpdater(dimension, value);
  styleUpdater();
  renderRgbCode();
}

// Event Handling ----------------------------

var listener = function(event) {
  var value = event.target.value;
  var dimension = event.target.dataset.color;
  controller(dimension, value);
}

var sliders = document.querySelectorAll(".slider");

sliders.forEach(function(element) {
  element.addEventListener("input", listener);
})

// Initialize --------------------------------

var initializer = function() {
  renderRgbCode();
}

initializer();