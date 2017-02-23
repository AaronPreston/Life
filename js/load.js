Engine.load = function() {
  cell = [];
  cellAmount = 500;

  for(var x = 0; x < cellAmount; x++) {
    cell[x] = new Cell(
      random(0, Environment.width), // X Val
      random(0, Environment.height), // Y Val
      random(4, 6) || random(12, 16) || random(20, 24) || random(26, 30), // X Size
      random(4, 6) || random(12, 16) || random(20, 24) || random(26, 30), // Y Size
      random(4, 7),// Speed,
      Color.black // Color
    );
  }
}
