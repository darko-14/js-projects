const quotes = [
    {
        name:'Stephen King',
        quote:'Get busy living or get busy dying.'
    },
    {
        name:'Marilyn Monroe',
        quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {
        name:'Oscar Wilde',
        quote:"Be yourself; everyone else is already taken."
    },
    {
        name:'Albert Einstein',
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
        name:'Stephen King',
        quote:'Get busy living or get busy dying.'
    },
    {
        name:'Frank Zappa',
        quote:"So many books, so little time."
    },
    {
        name:'Marcus Tullius Cicero',
        quote:"A room without books is like a body without a soul."
    },
    {
        name:'Mae West',
        quote:"You only live once, but if you do it right, once is enough."
    },
    {
        name:'Mahatma Gandhi',
        quote:"Be the change that you wish to see in the world."
    },
    {
        name:'Friedrich Nietzsche',
        quote:"Without music, life would be a mistake."
    }

]

const btn = document.querySelector('#btn')
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')

btn.addEventListener('click',displayQuote)

function displayQuote(){
    let random = Math.floor(Math.random()*quotes.length)
    quote.innerHTML = quotes[random].quote
    author.innerHTML = "- " + quotes[random].name
}