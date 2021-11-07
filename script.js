//constant variables

const quoteContainer = document.getElementById('quote-container');
const quoteText        = document.getElementById('quote');
const authorName        = document.getElementById('author');
const twitterBtn        = document.getElementById('twitter');
const newQuoteBtn        = document.getElementById('new-quote');



// Global variables
let apiQuotes = [];

// show new quote
function newQuote(){
    // select a quote from the array of quotes
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    console.log(quote);
    // Check if author name is null, replace it with the word "Unknown"
    if(quote.author === null){
        authorName.textContent = "Unknown author"
    } else {
        authorName.textContent = quote.author;
    }

    // Check the quote length to determine styling
    if (quote.text.length > 30) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    
}

// Get Quotes from the API using a asyncronous function
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    console.log("Fetching quotes...");
    try {
        const res = await fetch(apiUrl);
        apiQuotes = await res.json();
        // console.log(apiQuotes[0]);
        newQuote();
    } catch (error) {
        
    }

}


    // On Load...

    getQuotes();