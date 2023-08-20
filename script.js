const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
    // Add more quotes here
];

const quoteText = document.getElementById("quote-text");
const nextButton = document.getElementById("next-button");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function updateQuote() {
    const randomQuote = getRandomQuote();
    quoteText.textContent = randomQuote;
}

nextButton.addEventListener("click", updateQuote);

// Initial quote display
updateQuote();
