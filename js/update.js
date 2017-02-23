Engine.update = function() {

  if(keyPress.W) {
    cell[0].y -= cell[0].speed;
  } else if(keyPress.S) {
    cell[0].y += cell[0].speed;
  } else if(keyPress.A) {
    cell[0].x -= cell[0].speed;
  } else if(keyPress.D) {
    cell[0].x += cell[0].speed;
  }

  if(keyPress.UP) {
    cell[1].y -= cell[1].speed;
  } else if(keyPress.DOWN) {
    cell[1].y += cell[1].speed;
  } else if(keyPress.LEFT) {
    cell[1].x -= cell[1].speed;
  } else if(keyPress.RIGHT) {
    cell[1].x += cell[1].speed;
  }

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

function moveCell(index) {
  cell[index].x += Math.floor(Math.random() * 20);
}

function createNewCells(amount) {
  for(var x = cellAmount; x < cellAmount + amount; x++) {
    cell[x] = new LifeObj(
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
