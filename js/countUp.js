const countingElement = document.getElementById("number-counting");
const targetCount = 8601684;
const duration = 3000;
const interval = 10;
const increment = Math.ceil(targetCount / (duration / interval));
let currentCount = 0;
function countUpStart(){
    if (window.scrollY > 2943) {
        const countUpInterval = setInterval(() => {
            currentCount += increment;
            countingElement.textContent = currentCount;
            if (currentCount >= targetCount) {
                clearInterval(countUpInterval);
                window.removeEventListener('scroll', countUpStart);
            }}, interval);
        }
    };

    const counterTop = countingElement.offsetTop;
    window.addEventListener('scroll', countUpStart);
