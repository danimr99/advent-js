export default function getMinJump(obstacles) {
  const maxObstacle = Math.max(...obstacles);
  let obstaculeFound = true;
  let jumpSize = 1;

  const existsObstacleInPath = (numJumps) =>
    [...Array(numJumps)]
      .map((_, index) => (index + 1) * jumpSize)
      .some((jumpDrop) => obstacles.includes(jumpDrop));

  while (jumpSize < maxObstacle && obstaculeFound) {
    const numJumps = Math.floor(maxObstacle / jumpSize++);
    obstaculeFound = existsObstacleInPath(numJumps);
  }

  return jumpSize;
}

const obstacles = [5, 3, 6, 7, 9];
console.log(getMinJump(obstacles)); // -> 4
