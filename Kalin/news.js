const concerts = [
    { name: "Молец", date: "2026-06-20T20:30:00" },
    { name: "Любо Киров", date: "2026-06-10T21:00:00" },
    { name: "Тони Стораро", date: "2026-11-13T20:00:00" }
];

// Броене в таблицата / картите
function updateTableCountdowns() {
    const countdownElements = document.querySelectorAll(".countdown");

    countdownElements.forEach((element, index) => {
        if (index >= concerts.length) return;

        const targetTime = new Date(concerts[index].date).getTime();
        const now = new Date().getTime();
        const difference = targetTime - now;

        if (difference <= 0) {
            element.textContent = "🎉 Концертът започна!";
            element.style.background = "rgba(0, 180, 0, 0.9)";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        element.textContent = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
    });
}

// Стартиране
document.addEventListener("DOMContentLoaded", function() {
    updateTableCountdowns();
    setInterval(updateTableCountdowns, 1000);
});