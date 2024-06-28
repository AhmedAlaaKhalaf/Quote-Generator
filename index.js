var quoteArray = [
    {
        quote: `"Be yourself everyone else is already taken."`,
        author:"― Oscar Wilde",
    },
    {
        quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
        author:"― Albert Einstein",
    },
    {
        quote: `"A room without books is like a body without a soul."`,
        author:"― Marcus Tullius Cicero",
    },
    {
        quote: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
        author:"― Dr. Seuss",
    },
    {
        quote: `"You only live once, but if you do it right, once is enough."`,
        author:"― Mae West",
    },
    {
        quote: `"A day without sunshine is like, you know, night."`,
        author:"― Steve Martin",
    },
    {
        quote: `"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."`,
        author:"― Lao Tzu",
    }

]
    function getQuotes() {
        var randomValue = Math.floor(Math.random()*quoteArray.length)
        console.log(randomValue)
        document.getElementById("Quote").innerHTML =quoteArray[randomValue].quote
        document.getElementById("Author").innerHTML =quoteArray[randomValue].author
    }

