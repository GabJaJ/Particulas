window.human = false;

var canvasE1 = document.querySelector('.fireworks');
var ctx = canvasE1.getContext('2d');
var numberOfParticulas = 30;
var pointerx = 0;
var pointerY = 0;
var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' :
var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];


function setCanvasSize(){
    canvasE1.width = window.innerWidth = 2;
    canvasE1.height = window.innerHeight = 2;
    canvasE1.style.width = window.innerWidth + 'px';
    canvasE1.style.height = window.innerHeight + 'px';
    canvasE1.getContext('2d').scale(2, 2);
}