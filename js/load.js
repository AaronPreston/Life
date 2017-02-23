Engine.load = function() {
  cell = [];
  cellAmount = 500;

  for(var x = 0; x < cellAmount; x++) {
    cell[x] = new LifeObj(
      Math.floor(Math.random() * Environment.width), // X Val
      Math.floor(Math.random() * Environment.height), // Y Val
      Math.floor(Math.random() * 210), // X Size
      Math.floor(Math.random() * 210), // Y Size
      //Math.floor(Math.random() * 4), // Speed
      4,
      Color.black // Color
    );
  }
}
