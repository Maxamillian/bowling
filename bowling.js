
// configuration variables

var settings = {
  w: window.innerWidth,
  h: window.innerHeight,
  r: 15,
  n: 30,
  duration: 1500
}

var mouse = { x: settings.w / 2, y: settings.h / 2};
var score = 0;
var highScore = 0;

// helper functions

var pixelize = (number) => number + 'px';

var rand = (n) => Math.floor(Math.random() * n);
var randX = () => pixelize(rand(settings.w - settings.r * 2));
var randy = () => pixelize(rand(settings.h - settings.r * 2));

// main game code

//set up board
var board = d3.select('.board').style({
  width: pixelize(settings.w / 4),
  height: pixelize(settings.h - 130)
});

// set up player
var player = d3.select('.mouse').style({
  bottom: pixelize(35),
  left: pixelize(mouse.x - settings.r),
  width: pixelize(settings.r * 2),
  height: pixelize(settings.r * 2),
  'border-radius': pixelize(settings.r * 2)
});




