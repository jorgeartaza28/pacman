var map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var pacman = {
  x: 6,
  y: 4,
};

function drawWorld() {
  document.getElementById("world").innerHTML = "";
  for (var y = 0; y < map.length; y = y + 1) {
    // console.log(map[y]);
    for (var x = 0; x < map[y].length; x = x + 1) {
      console.log(map[y][x]);
      if (map[y][x] === 1) {
        document.getElementById("world").innerHTML +=
          "<div class='wall'></div>";
      } else if (map[y][x] === 2) {
        document.getElementById("world").innerHTML +=
          "<div class='coin'></div>";
      } else if (map[y][x] === 3) {
        document.getElementById("world").innerHTML +=
          "<div class='ground'></div>";
      } else if (map[y][x] === 5) {
        document.getElementById("world").innerHTML +=
          "<div class='pacman'></div>";
      }
    }
    document.getElementById("world").innerHTML += "<br>";
  }
}
document.onkeydown = function (e) {
  if (e.keyCode === 37) {
    if (map[pacman.y][pacman.x - 1] !== 1) {
      map[pacman.y][pacman.x] = 3;
      pacman.x = pacman.x - 1;
      map[pacman.y][pacman.x] = 5;
      drawWorld();
    }
  } else if (e.keyCode === 38) {
    if (map[pacman.y - 1][pacman.x] !== 1) {
      map[pacman.y][pacman.x] = 3;
      pacman.y = pacman.y - 1;
      map[pacman.y][pacman.x] = 5;
      drawWorld();
    }
  } else if (e.keyCode === 39) {
    if (map[pacman.y][pacman.x + 1] !== 1) {
      map[pacman.y][pacman.x] = 3;
      pacman.x = pacman.x + 1;
      map[pacman.y][pacman.x] = 5;
      drawWorld();
    }
  } else if (e.keyCode === 40) {
    if (map[pacman.y + 1][pacman.x] !== 1) {
      map[pacman.y][pacman.x] = 3;
      pacman.y = pacman.y + 1;
      map[pacman.y][pacman.x] = 5;
      drawWorld();
    }
  }
  console.log(e.keyCode);
};
drawWorld();
