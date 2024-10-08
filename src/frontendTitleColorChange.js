/* window.addEventListener("resize", checkLettersPosition);
window.addEventListener("DOMContentLoaded", checkLettersPosition);

function checkLettersPosition() {
    const letters = document.querySelectorAll(".letter");
    const container = document.querySelector(".container");
    const containerLeft = container.getBoundingClientRect().left;
    const containerWidth = container.getBoundingClientRect().width;
    const greenZoneStart = containerLeft + (containerWidth * 0.77); // Yeşil alanın başlangıcı

    // Öncelikle tüm harflerin rengini varsayılana döndür
    letters.forEach(letter => {
        letter.style.color = "#32CD32"; // Orijinal limegreen rengi
    });

    // Harflerin pozisyonuna göre renklerini güncelle
    letters.forEach(letter => {
        const letterPosition = letter.getBoundingClientRect();
        const letterWidth = letterPosition.right - letterPosition.left;

        // Harfin sol ve sağ kenarlarının pozisyonuna göre renk değişimi
        if (letterPosition.left < greenZoneStart && letterPosition.right > greenZoneStart) {
            const overlapWidth = letterPosition.right - greenZoneStart;
            const overlapPercentage = overlapWidth / letterWidth;

            if (overlapPercentage > 0) {
                letter.style.color = `linear-gradient(to right, #32CD32 ${100 - overlapPercentage * 100}%, #800080 ${overlapPercentage * 100}%)`;
            }
        } else if (letterPosition.left >= greenZoneStart) {
            letter.style.color = "#800080"; // Mor renk
        }
    });
}
 */