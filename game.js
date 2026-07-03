const road = document.getElementById("road");
const bike = document.getElementById("bike");
const score = document.getElementById("score");

let roadPosition = 0;
let bikeX = window.innerWidth / 2 - 20;
let distance = 0;

bike.style.left = bikeX + "px";

function gameLoop() {
  // Move road
  roadPosition += 8;
  road.style.top = -(roadPosition % window.innerHeight) + "px";

  // Increase score
  distance++;
  score.textContent = distance + " m";

  requestAnimationFrame(gameLoop);
}

gameLoop();

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    bikeX -= 25;
  }
  if (e.key === "ArrowRight") {
    bikeX += 25;
  }

  // Keep bike inside the screen
  if (bikeX < 0) bikeX = 0;
  if (bikeX > window.innerWidth - 40)
    bikeX = window.innerWidth - 40;

  bike.style.left = bikeX + "px";
});

// Touch controls
let startX = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (endX < startX) {
    bikeX -= 50;
  } else {
    bikeX += 50;
  }

  if (bikeX < 0) bikeX = 0;
  if (bikeX > window.innerWidth - 40)
    bikeX = window.innerWidth - 40;

  bike.style.left = bikeX + "px";
});
