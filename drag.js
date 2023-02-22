// JavaScript code for draggable elements
const draggableElements = document.querySelectorAll('.draggable-element');
let currentElement = null;
let offsetX = 0;
let offsetY = 0;

draggableElements.forEach(element => {
  element.addEventListener('mousedown', e => {
    currentElement = e.target;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });

  element.addEventListener('mousemove', e => {
    if (currentElement) {
      const x = e.pageX - offsetX;
      const y = e.pageY - offsetY;
      currentElement.style.left = x + 'px';
      currentElement.style.top = y + 'px';
    }
  });

  element.addEventListener('mouseup', e => {
    currentElement = null;
  });
});