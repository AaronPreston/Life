Engine.draw = function() {
  clearPage(Color.offWhite, Environment.width, Environment.height);

  for(var x = 0; x < cellAmount; x++) {
    drawCell(x);
  }

}

function drawCell(index) {
  c.fillStyle = cell[index].color;
  c.fillRect(cell[index].x, cell[index].y, cell[index].width, cell[index].height);
}
