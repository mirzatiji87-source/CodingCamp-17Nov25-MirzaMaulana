welcomeMessage();

function welcomeMessage() {
    let userName = prompt("Please enter your name:");

    if (userName === "" || userName === null) {
        userName = "Guest";
    }

    document.getElementById("welcome-speech").innerText =
        `Welcome to Mirza Company, ${userName}!`;
}

function validateForm() {
    // jika nambah validasi tinggal masukin sini hahay
}
const cursor = document.getElementById("neon-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});
