const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

const gridPositions = [
  [{xPos: 10, yPos: 10}, {xPos: 170, yPos: 10}, {xPos: 330, yPos: 10}, {xPos: 490, yPos: 10}],
  [{xPos: 10, yPos: 170}, {xPos: 170, yPos: 170}, {xPos: 330, yPos: 170}, {xPos: 490, yPos: 170}],
  [{xPos: 10, yPos: 330}, {xPos: 170, yPos: 330}, {xPos: 330, yPos: 330}, {xPos: 490, yPos: 330}],
  [{xPos: 10, yPos: 490}, {xPos: 170, yPos: 490}, {xPos: 330, yPos: 490}, {xPos: 490, yPos: 490}]
];

function newGame() {
  canvas.width = 650;
  canvas.height = 650;
  ctx.fillStyle = "#FFD7BA";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#FFE5D9";

  let gridX = 10, gridY = 10;

  let gridNumber = 1; 

  for (const rows of grid) {
    for (const columns of rows) {
      ctx.fillRect(gridX, gridY, 150, 150);

      console.log(`Current grid number ${gridNumber}\nGridX = ${gridX}\ngridY = ${gridY}`); // just for testing, dont need this
      
      gridX += 160;

      gridNumber++; // just for testing
    }
    gridX = 10;
    gridY += 160;
  }
}

newGame();