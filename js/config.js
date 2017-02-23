var Engine = {
  load: function() {}, // Engine's load function.
  update: function() {}, // Engine's update function.
  draw: function() {}, // Engine's draw function.
  loop: null, // Engine's interval.

  stop: function() { // Clears the engine's interval.
    clearInterval(this.loop);
  }
}

var Environment = { // Engine graphical properties.
  width: window.innerWidth,
  height: window.innerHeight
}

Color = { // Color constants.
  white: '#ffffff',
  offWhite: '#e2e2e2',
  black: '#000000'
}
