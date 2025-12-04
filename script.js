/* Fade-in on load for unlocked content */
function startFadeIn() {
    document.querySelectorAll(".fade-in").forEach((el, i) => {
        el.style.animationDelay = `${i * 0.3}s`;
    });
}

/* Gift Reveal */
function revealGift() {
    document.getElementById("giftBox").classList.remove("hidden");
}

/* PASSWORD SYSTEM */
function checkPassword() {
    const input = document.getElementById("passwordInput").value.toLowerCase().trim();
    const error = document.getElementById("passwordError");

    if (input === "november 8th" || input === "november 8") {
        document.getElementById("passwordScreen").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("passwordScreen").style.display = "none";
            document.getElementById("mainContent").style.display = "block";
            startFadeIn();
        }, 700);
    } else {
        error.textContent = "Wrong date… try again ❤️";
    }
}

/* Snow Generator */
function createSnow() {
    const snowContainer = document.getElementById("snow");
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.innerHTML = "❄";

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.fontSize = Math.random() * 12 + 10 + "px";
    snow.style.animationDuration = Math.random() * 3 + 2 + "s";

    snowContainer.appendChild(snow);

    setTimeout(() => snow.remove(), 5000);
}

setInterval(createSnow, 120);
