CellAI = {
  move: function(cell, direction) { // (Arr index, String)
    switch(direction.toLowerCase()) {
      case 'up':
        cell.y -= cell.speed;
        break;
      case 'down':
        cell.y += cell.speed;
        break;
      case 'left':
        cell.x -= cell.speed;
        break;
      case 'right':
        cell.x += cell.speed;
        break;
      default:
        console.log("ERROR: direction parameter not defined in CellAI.move()");
    }
  }
}
