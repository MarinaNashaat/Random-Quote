$(document).ready(function() {
    var quotes = [{
            "quote": "The problem is not the problem; the problem is your attitude about the problem.",
            "author": "Captain Jack Sparrow"
        },
        {
            "quote": "Do not speak badly of yourself. For the Warrior within hears your words and is lessened by them.",
            "author": "David Gemmell"
        },
        {
            "quote": "Great things are done by a series of small things brought together.",
            "author": "Van Gogh"
        },
        {
            "quote": "The truth will set you free, but first it will piss you off.",
            "author": "Gloria Steinem"
        },
        {
            "quote": "You can't use up creativity. The more you use, the more you have.",
            "author": "Maya Angelou"
        },
        {
            "quote": "Just remember that sometimes, the way you think about a person isn't the way they actually are.",
            "author": "John Green"
        },
        {
            "quote": "You don't have a soul. You are a soul. You have a body.",
            "author": "C.S. Lewis"
        },
        {
            "quote": "Life becomes easier when you learn to accept an apology you never got.",
            "author": "Robert Brault"
        },
        {
            "quote": "May you have warm words on a cold evening, a full moon on a dark night, and a smooth road all the way to your door.",
            "author": "Irish blessing"
        },
        {
            "quote": "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else's highlight reel.",
            "author": "Steve Furtick"
        }
    ];
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#006666", "#52527a", "#77B1A9", "#73A857", "#009933", "#660033", "#3399ff"];
    var getRandom = function(array) {
        return array[Math.floor(Math.random() * array.length)];

    }
    var color = getRandom(colors),
        quote = getRandom(quotes);
    $('#wrapper, #tweet-quote ,#new-quote').css("background-color", color);
    $('#author, #text').css("color", color);
    $('#text').html(quote["quote"]);
    $('#author').html(quote["author"]);

    $('#new-quote').on('click', function() {
        var randomColor = getRandom(colors),
            randomQuote = getRandom(quotes);

        $('#wrapper, #tweet-quote ,#new-quote').css("background-color", randomColor);
        $('#author, #text').css("color", randomColor);
        $('#text').html(randomQuote["quote"]);
        $('#author').html(randomQuote["author"]);
    });
    $('#tweet-quote').on('click', function() {
        var tweet = encodeURIComponent($('#text').text()) + " " + encodeURIComponent($('#author').text());
        var url = "https://twitter.com/intent/tweet?text=" + tweet + "&hashtags=quotes";
        window.open(url);
    });
});