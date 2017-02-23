Engine.update = function() {

  for(var x = 0; x < cellAmount; x++) {
    for(var y = 0; y < cellAmount; y++) {
      if(y !== x) {
        if(doesCollide(cell[y], cell[x])) {
          if(cell[y].width * cell[y].height > cell[x].width * cell[x].height) {
            cell[x] = ""; // DELETE Object
            cell[y].width += 5;
            cell[y].height += 5;
          } else {
            cell[y] = ""; // DELETE Object
            cell[x].width += 5;
            cell[x].height += 5;
          }
        }
      }
    }
    //moveCell(x);
  }

  //createNewCells(5);
}

function createNewCells(amount) {
  for(var x = cellAmount; x < cellAmount + amount; x++) {
    cell[x] = new Cell(
      Math.floor(Math.random() * Environment.width / 2), // X Val
      Math.floor(Math.random() * Environment.height), // Y Val
      Math.floor(Math.random() * 10), // X Size
      Math.floor(Math.random() * 10), // Y Size
      Math.floor(Math.random() * 20), // Speed
      Color.black // Color
    );
  }

  cellAmount += amount;
}
