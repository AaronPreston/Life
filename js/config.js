var Engine = {
  load: function() {},
  update: function() {},
  draw: function() {},
  loop: null,

  stop: function() {
    clearInterval(this.loop);
  }
}

var Environment = {
  width: window.innerWidth,
  height: window.innerHeight
}

Color = {
  white: '#ffffff',
  offWhite: '#e2e2e2',
  black: '#000000'
}
