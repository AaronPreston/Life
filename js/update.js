Engine.update = function() {

  for(var x = 0; x < cellAmount; x++) {

    //CellAI.move(cell[x], Math.floor(Math.random() * 4));

    var nearestCell = CellAI.findNearestCell(cell[x], cell);

    console.log("Cell[" + x + "]\n\n" + cell[x].x + "\n" + cell[x].y + "\n\n\n" + nearestCell.x + "\n" + nearestCell.y)

    if(cell[x].x > nearestCell.x) { // 0 UP 1 DOWN 2 LEFT 3 RIGHT
      CellAI.move(cell[x], 2);
    } else if(cell[x].x < nearestCell.x) {
      CellAI.move(cell[x], 3);
    }

    if(cell[x].y > nearestCell.x) {
      CellAI.move(cell[x], 0);
    } else if(cell[x].y < nearestCell.y) {
      CellAI.move(cell[x], 1);
    }

    /*if(cell[x].x > nearestCell.x && cell[x].y < nearestCell.y) { // cell[x] is in Q1 to nearestCell
      console.log("Q1");
      CellAI.move(cell[x], 2);
      CellAI.move(cell[x], 1);
    }

    if(cell[x].x < nearestCell.x && cell[x].y < nearestCell.y) { // cell[x] is in Q2 to nearestCell
      console.log("Q2");
      CellAI.move(cell[x], 3);
      CellAI.move(cell[x], 1);
    }

    if(cell[x].x < nearestCell.x && cell[x].y > nearestCell.y) { // cell[x] is in Q3 to nearestCell
      console.log("Q3");
      CellAI.move(cell[x], 3);
      CellAI.move(cell[x], 0);
    }

    if(cell[x].x > nearestCell.x && cell[x].y > nearestCell.y) { // cell[x] is in Q4 to nearestCell
      console.log("Q4");
      CellAI.move(cell[x], 2);
      CellAI.move(cell[x], 0);
    }*/

    if(doesCollide(cell[x], {x: 0, y: Environment.height, width: Environment.width, height: 100})) { // Bottom border
      CellAI.move(cell[x], 0);
    }
    if(doesCollide(cell[x], {x: 0, y: -100, width: Environment.width, height: 100})) { // Top border
      CellAI.move(cell[x], 1);
    }
    if(doesCollide(cell[x], {x: Environment.width, y: 0, width: 100, height: Environment.height})) { // Right border
      CellAI.move(cell[x], 2);
    }
    if(doesCollide(cell[x], {x: -100, y: 0, width: 100, height: Environment.height})) { // Left border
      CellAI.move(cell[x], 3);
    }

    for(var y = 0; y < cellAmount; y++) {
      if(y !== x) {

        if(doesCollide(cell[y], cell[x])) { // Checking collisions between two cells
          if(cell[y].width * cell[y].height > cell[x].width * cell[x].height) {
            cell[x] = ""; // DELETE Object
            cell[y].width += 1;
            cell[y].height += 1;
          } else {
            cell[y] = ""; // DELETE Object
            cell[x].width += 1;
            cell[x].height += 1;
          }
        }

      }
    }
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
