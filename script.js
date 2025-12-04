function checkPassword() {
    const val = document.getElementById("passwordInput").value.toLowerCase().trim();
    const error = document.getElementById("passwordError");

    if (val === "november 8" || val === "november 8th") {
        document.getElementById("passwordScreen").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("passwordScreen").remove();
            document.getElementById("mainContent").classList.remove("hidden");
        }, 600);

    } else {
        error.textContent = "Wrong date—try again ❤️";
    }
}

function revealGift() {
    document.getElementById("giftBox").classList.remove("hidden");
}
