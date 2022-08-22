let quotes = ["You are amazing!", "You're a work of art. Not everyone will understand, but the ones who do, will never forget about you.", "You are some kind of wonderful!", "You are braver than you believe, stronger than you seem, smarter than you think & loved more than you know.", "Hey warrior, keep going.", "The world is full of beautiful things, like you.", "Hey there, keep going.", "Keep shining beautiful one, the world needs your light.", "Believe in yourself and you will be unstoppable.", "You are brave.", "Hey you, don't give up, okay?", "You can totally do this.", "Believe and achieve.", "You can do hard things.", "We are all work in progress.", "You're amazing just the way you are.", "You can. End of story.", "No one is you and that is your super power.", "Believe in yourself and anything is possible.", "Make today amazing!"]

let quoteEl = document.getElementById("quote-el");
let btnEl = document.getElementById("btn-el");

btnEl.addEventListener("click", function() {
    quoteEl.textContent = "";
    for (let i = 0; i < quotes.length; i++) {
        let randomQuote = Math.floor(Math.random() * quotes.length)
        quoteEl.textContent = quotes[randomQuote]
        }
})