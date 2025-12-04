// PASSWORD
function checkPassword() {
    let input = document.getElementById("password-input").value;
    let error = document.getElementById("error");

    if (input === "november 8th") {
        document.getElementById("password-screen").classList.add("hidden");
        document.getElementById("gift-page").classList.remove("hidden");
    } else {
        error.textContent = "Wrong password. Try again ❤️";
    }
}


// SNOW (NON-LAG VERSION)
const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");

let width, height;
let snowflakes = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.onresize = resize;
resize();

function createSnowflake() {
    return {
        x: Math.random() * width,
        y: -10,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5
    };
}

function updateSnow() {
    if (snowflakes.length < 150) { // LIMIT!!! prevents lag
        snowflakes.push(createSnowflake());
    }

    ctx.clearRect(0, 0, width, height);

    snowflakes.forEach((f, i) => {
        f.y += f.speed;

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        if (f.y > height) snowflakes.splice(i, 1); // DELETE off-screen flakes
    });

    requestAnimationFrame(updateSnow);
}
updateSnow();
