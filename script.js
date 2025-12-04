/* Fade-in on load */
window.onload = () => {
    document.querySelectorAll(".fade-in").forEach((el, i) => {
        el.style.animationDelay = `${i * 0.3}s`;
    });
};

/* Gift Reveal */
function revealGift() {
    document.getElementById("giftBox").classList.remove("hidden");
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
