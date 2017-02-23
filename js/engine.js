var canvas = document.getElementById('canvas'),
    c = canvas.getContext('2d');

canvas.width = Environment.width;
canvas.height = Environment.height;

Engine.load();

Engine.loop = setInterval(function() {
  Engine.update();
  Engine.draw();
}, fps(60));
