//variables
let btn = document.querySelector('#newquote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes = [{
    quote: '"baal set krwado"',
    person: 'chaudhary'
},

{
    quote: '"hello am gold digger"',
    person: 'ishika'
},
{
    quote: '"mei yash ki deewani hu"',
    person: 'don'
},
{
    quote: '"Anti is my hero"',
    person: 'Nandini'
},
{
    quote: '"mei google jaungi"',
    person: 'ishita'
},
{
    quote: '"radhika meri hai bas meri"',
    person: 'nishant'
},

];
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    console.log(quotes[random].person.toUpperCase());
    console.log(person.innerText);
    console.log(quotes[random].person.toUpperCase() === person.innerText);
    if (quotes[random].person.toUpperCase() === person.innerText) {
        quote.innerText = quotes[Math.floor((random + 1) / quotes.length)].quote;
        person.innerText = quotes[Math.floor((random + 1) / quotes.length)].person;
    }
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
