let quotes = [{
   "name" : "Henry Ford",
   "quote": "Don't find the fault, find the remedy"
},{
  "name" : "Nelson Mandela",
  "quote": "I learned that courage was not the absence of fear, but the triumph over it."
},{
  "name" : "Seneca",
  "quote": "There is no easy way from the earth to the stars."

},{
  "name" : "Napoleon Bonaparte",
  "quote": "Victory is not always winning the battle...but rising every time you fall."
},{
  "name" : "Plato",
  "quote": "Reality is created by the mind, we can change our reality by changing our mind."
}];

let quotesButton = document.querySelector('button');
let quoteText = document.querySelector('.quoteText');
let quoteAuthor = document.querySelector('.quoteAuthor');

quotesButton.addEventListener('click', function(){
  let random = Math.floor(Math.random() * quotes.length);

  quoteText.innerHTML = quotes[random]["quote"];
  quoteAuthor.innerHTML = quotes[random]["name"];
})
