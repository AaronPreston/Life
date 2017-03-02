CellAI = {
  move: function(cell, direction) {
    switch(direction) {
      case 0: // UP
        cell.y -= cell.speed;
        break;
      case 1: // DOWN
        cell.y += cell.speed;
        break;
      case 2: // LEFT
        cell.x -= cell.speed;
        break;
      case 3: // RIGHT
        cell.x += cell.speed;
        break;
      default:
        console.log("ERROR: direction parameter not defined in CellAI.move()");
    }
  },

  findNearestCell(cell, cellArr) {
    var closest = {
      x: -1,
      y: -1,
      object: {},
    };

    for(var i = 0; i < cellArr.length - 1; i++) {
      if((i !== cellArr.indexOf(cell))) {
        if(closest.x < 0 && closest.y < 0) {
          closest.x = cellArr[i].x;
          closest.y = cellArr[i].y;
        }

        if(Math.abs(cell.x - cellArr[i].x) <= Math.abs(closest.x && cell.y - cellArr[i].y) <= closest.y) {
          closest.x = cellArr[i].x;
          closest.y = cellArr[i].y;
          closest.object = cell;

          console.log(cellArr.indexOf(closest.object))
        }
      }
    }

    return closest.object;
  }
}
