const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
        author: "Nelson Mandela",
    },
    {
        quote: "The way to get started is to quit talking and begin doing",
        author :"Walt Disney",
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor",
        author :"Eleanor Roosevelt",
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author :"James Cameron",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author :"John Lennon",
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on",
        author :"Franklin D. Roosevelt",
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else",
        author :"Margaret Mead",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light",
        author :"Aristotle",
    },
    {
        quote: "Whoever is happy will make others happy too",
        author :"Anne Frank",
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail",
        author :"Ralph Waldo Emerson",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randInt = Math.floor(Math.random() * quotes.length);
const todaysQuotes = quotes[randInt];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
