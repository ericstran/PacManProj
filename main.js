// DOM VARIABLES / REFERENCES
const navItems = document.getElementById('side-nav');
const gameDOM = document.getElementById('game');

// VARIABLES
const mapSize = 10;
const state = {
  posX: 0,
  posY: 5,
  score: 0,
}

const mapTiles = [
  // 0 is empty, 1 is point, 2 is power-up
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


// FUNCTIONS
const positionPlayer = () => {
  // render player on map
}

const checkBoundaries = (x, y) => {
  if (x > state.mapSize) { }
}

const createTile = (mapItem) => {
  console.log(mapItem);
  let newTile = document.createElement('div');
  return newTile;
}

const renderMap = () => {
  gameDOM.innerHTML = '';
  const mapBox = document.createElement('div');
  mapBox.classList = 'map-grid';
  // loop through tiles array, adding each one
  for (let x = 0; x < mapTiles.length; x++) {
    for (let y = 0; y < mapTiles[x].length; y++) {
      const newTile = createTile(mapTiles[x][y]);
      newTile.classList = 'map-tile';
      newTile.textContent = mapTiles[x][y];
      mapBox.appendChild(newTile);
    };
  };

  // add our new map to gameDOM
  gameDOM.appendChild(mapBox);
}

console.log(state.posY);


// ATTACH EVENT LISTENERS
navItems.addEventListener('click', (event) => {
  console.log(event.target.id);
  switch (event.target.id) {
    case "btn-start":
      renderMap();
      break;
    case "btn-load":
      positionPlayer();
      break;
    case "btn-help":
      positionPlayer();
      break;
    default:
      break;
  }
})