// var display = 'none';
function toggleDisplay(item) {
  var element = document.getElementById(item);
  console.log(element);
  console.log(element.style.display);
  if(element.style.display === 'none') {
    element.style.display = 'block';
    // element.style.display = display;
  }
  else if(element.style.display == 'block') {
    element.style.display = 'none';
    // element.style.display = display;
  }
}
