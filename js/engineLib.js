function clearPage(backColor, width, height) {
  c.fillStyle = backColor;
  c.fillRect(0, 0, width, height);
}

function fps(val) {
  return 1000 / val;
}

function doesCollide(objOne, objTwo) {
  if((objOne.x + objOne.width >= objTwo.x && objOne.x <= objTwo.x + objTwo.width) &&
     (objOne.y + objOne.height >= objTwo.y && objOne.y <= objTwo.y + objTwo.height)) {
       return true;
     }
}

var keyPress = {
  W: false,
  A: false,
  S: false,
  D: false,

  UP: false,
  DOWN: false,
  LEFT: false,
  RIGHT: false
};

document.onkeydown = function(e) {
  keyPress.W = false;
  keyPress.A = false;
  keyPress.S = false;
  keyPress.D = false;

  keyPress.UP = false;
  keyPress.DOWN = false;
  keyPress.LEFT = false;
  keyPress.RIGHT = false;

  if(e.keyCode === 87) { // W
    keyPress.W = true;
  }

  if(e.keyCode === 65) { // A
    keyPress.A = true;
  }

  if(e.keyCode === 83) { // S
    keyPress.S = true;
  }

  if(e.keyCode === 68) { // D
    keyPress.D = true;
  }

  if(e.keyCode === 38) {
    keyPress.UP = true;
  } else if(e.keyCode === 37) {
    keyPress.LEFT = true;
  } else if(e.keyCode === 40) {
    keyPress.DOWN = true;
  } else if(e.keyCode === 39) {
    keyPress.RIGHT = true;
  }
}

document.onkeyup = function() {
  keyPress.W = false;
  keyPress.A = false;
  keyPress.S = false;
  keyPress.D = false;

  keyPress.UP = false;
  keyPress.DOWN = false;
  keyPress.LEFT = false;
  keyPress.RIGHT = false;
}
