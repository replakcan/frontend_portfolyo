window.addEventListener("resize", checkLettersPosition);
window.addEventListener("DOMContentLoaded", checkLettersPosition);

function checkLettersPosition() {
    const letters = document.querySelectorAll(".letter");
    const container = document.querySelector(".container");
    const containerLeft = container.getBoundingClientRect().left;
    const containerWidth = container.getBoundingClientRect().width;
    const greenZoneStart = containerLeft + (containerWidth * 0.77); // Yeşil alanın başlangıcı

    letters.forEach(letter => {
        const letterPosition = letter.getBoundingClientRect();
        const letterWidth = letterPosition.right - letterPosition.left;

        // Eğer harfin en az %50'si yeşil bölgeye giriyorsa rengini mor yap
        const overlapWidth = Math.max(0, letterPosition.right - greenZoneStart);
        const overlapPercentage = overlapWidth / letterWidth;

        if (overlapPercentage >= 0.5) {
            letter.style.color = "#4731d3"; // Mor renk
        } else {
            letter.style.color = "#cbf281"; // Limegreen renk
        }
    });
}