var display = 'none';

function toggleDisplay() {
  var element = document.getElementById('betta-facts');
  if(display == 'none') {
    display = 'block';
    element.style.display = display;
  }
  else if(display == 'block') {
    display = 'none';
    element.style.display = display;
  }
}

var display2 = 'none';
function toggleCamelDisplay() {
  var element = document.getElementById('camel-facts');
  if(display2 == 'none') {
    display2 = 'block';
    element.style.display = display2;
  }
  else if(display2 == 'block') {
    display2 = 'none';
    element.style.display = display2;
  }
}

var display3 = 'none';
function toggleKangarooDisplay() {
  var element = document.getElementById('kangaroo-facts');
  if(display3 == 'none') {
    display3 = 'block';
    element.style.display = display3;
  }
  else if(display3 == 'block') {
    display3 = 'none';
    element.style.display = display3;
  }
}
