window.addEventListener('load', start);
var input_r = 0;
var input_g = 0;
var input_b = 0;
var input = document.querySelectorAll('input');

function start() {
  preventFormSubmit();
  transactionRgb();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
}

function transactionRgb() {
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('input', function () {
      var red = document.getElementById('red').value,
        green = document.getElementById('green').value,
        blue = document.getElementById('blue').value;
      var display = document.getElementById('display');
      display.style.background =
        'rgb(' + red + ', ' + green + ', ' + blue + ')';
      updateInput(red, green, blue);
    });
    function updateInput(r, g, b) {
      var red = document.querySelector('#input_r');
      var green = document.querySelector('#input_g');
      var blue = document.querySelector('#input_b');
      red.value = r;
      green.value = g;
      blue.value = b;
    }

    updateInput(red, green, blue);
  }
}
