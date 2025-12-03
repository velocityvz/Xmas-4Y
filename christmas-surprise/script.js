// SNOW EFFECT
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
let snowflakes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.onresize = resizeCanvas;

// Create snowflakes
for (let i = 0; i < 100; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    d: Math.random() + 1
  });
}

function drawSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  updateSnow();
}

function updateSnow() {
  for (let flake of snowflakes) {
    flake.y += Math.pow(flake.d, 2) + 1;
    if (flake.y > canvas.height) {
      flake.y = -10;
      flake.x = Math.random() * canvas.width;
    }
  }
}

setInterval(drawSnow, 30);

// MAIN BUTTONS
const letterBtn = document.getElementById("letterBtn");
const giftBtn = document.getElementById("giftBtn");
const messageBox = document.getElementById("messageBox");

// ❤️ Love Letter
const loveLetter = `
My dearest Yichen,

Merry Christmas ❤️

I know we’re miles apart, but that never stopped
you from being the most important part of my life.

You make my days better, my nights easier,
and my heart full.

This is just a tiny gift,
but it comes with all my love.

– Khari ❤️
`;

letterBtn.addEventListener("click", () => {
  messageBox.classList.remove("hidden");
  messageBox.innerText = loveLetter;
});

// 🎁 Gift Button → Calls Cloudflare Worker
giftBtn.addEventListener("click", async () => {
  messageBox.classList.remove("hidden");
  messageBox.innerText = "Opening your present... 🎁";

  const res = await fetch(
    "https://YOUR-WORKER-URL.workers.dev/reveal?secret=lf92JDa93jskd992-sjf923"
  );

  const data = await res.json();

  if (data.success) {
    messageBox.innerText = `🎁 Your Christmas Gift Code:\n\n${data.code}\n\n❤️ Merry Christmas, Yichen!`;
  } else {
    messageBox.innerText = "❌ Error revealing gift.";
  }
});

