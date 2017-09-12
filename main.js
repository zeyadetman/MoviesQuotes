var colors = ['#F1C50E', '#785446', '#5F7C8A', '#C1392D', '#2DCC70', '#9A59B5', '#3297DB', '#19BC9D', '#34495E'];
change();

function change() {

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            //console.log(JSON.parse(this.responseText));
            var res = JSON.parse(this.responseText);
            var index = Math.floor(0 + (Math.random() * ((res.length - 0) + 1)));
            //console.log(index);
            $(".author").html(res[index]['author']);
            $(".quotetext").html(res[index]['quote']);
            $("body").css('background', colors[index % colors.length]);
            $(".inner").css('color', colors[index % colors.length]);
            $(".next").css('background-color', colors[index % colors.length]);
            $('.twitter-share').attr('href', `https://twitter.com/intent/tweet?text=${encodeURIComponent(res[index]['quote'] +', '+res[index]['author'])}&hashtags=Quote&via=zeyadetman`);
            $('.twitter-share').on('click', function() {
                if (!inIframe()) {
                    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
                }
            });
            twttr.widgets.load();
        }
    });

    xhr.open("POST", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=30");
    xhr.setRequestHeader("x-mashape-key", "yC6hsqtxRNmsh6CbE7AZZJBbTq1kp15FLUujsnrcOgll9L5atU");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "18c01c14-32df-43d4-9ecb-5e8b1dfd68db");

    xhr.send(data);
}

window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };
    return t;
}(document, "script", "twitter-wjs"));
