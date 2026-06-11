function changeMessage() {
    const messages = [
        "You just wrote your first interactive web app 🚀",
        "Keep going — you're building real software!",
        "Every developer starts exactly here 💡",
        "Try changing colors or text next!"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);

    document.getElementById("dynamicText").innerText =
        messages[randomIndex];
}