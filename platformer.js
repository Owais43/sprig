/*
@title: Maze-game v1
@author: Owais43
@tags: ["maze"]
@addedOn: 2024-08-15
*/

const player = "p";
const wall = "w";
const goal = "g";
const background = "b";

setLegend(
  [player, bitmap`
................
................
.....0000.......
....0....0......
...00....00.....
...0.0..0.0.....
..0..0000..0....
..0000000000....
..0..0..0..0....
...0....0.......
....0..0........
.....00.........
................
................
................
................`],
  [wall, bitmap`
................
.11111111111111.
.11111111111111.
.11111111111111.
.11111111111111.
.11111111111111.
.11111111111111.
.11111111111111.
.11111111111111.
.11111111111111.
.11111111111111.
.11111111111111.
.11111111111111.
.11111111111111.
................
................`],
  [goal, bitmap`
................
................
................
.....1111.......
...11....11.....
..1..1..1..1....
..1..1111..1....
..1111111111....
....1....1......
....1....1......
.....1..1.......
......11........
................
................
................
................`],
  [background, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................`]
);

setBackground(background);

const level = map`
wwwwwwwwwwwwwwww
wp............gw
w.wwww.wwwwww..w
w....w......w..w
wwww.wwww..w..ww
w..w.w....ww..ww
w..w.wwww.ww..ww
w......w.....www
wwwwwwwwwwwwwwww`;

setMap(level);

setSolids([player, wall]);

onInput("w", () => {
  const playerSprite = getFirst(player);
  playerSprite.y -= 1;
});

onInput("s", () => {
  const playerSprite = getFirst(player);
  playerSprite.y += 1;
});

onInput("a", () => {
  const playerSprite = getFirst(player);
  playerSprite.x -= 1;
});

onInput("d", () => {
  const playerSprite = getFirst(player);
  playerSprite.x += 1;
});

afterInput(() => {
  const playerSprite = getFirst(player);
  
  // Check for win condition
  if (getTile(playerSprite.x, playerSprite.y).some(tile => tile.type === goal)) {
    addText("You Win!", { x: 6, y: 4, color: color`3` });
  }
});

