

var arr = [`"It's not what happens to you, but how you react to it that matters."`,
    `"You miss 100% of the shots you don't take."`,
    `"the best revenge is massive success."`,
    `"Resentment is like drinking poison and waiting for your enemies to die."`,
    `"Do not take life too seriously. you will not get out alive."`]
var arr1 = ["--Epictetus" , "--Wayne Gretzy" , "--Frank Sinatra" , "--Nelson Mandela" , "--Elbert Hubbard"
]
var i = 0;
function NewQuote() {
    if (i<5) {
        document.getElementById("new-quote").innerHTML = arr[i];
        document.getElementById("author").innerHTML = arr1[i++];
    }
    else {
        i = 0;
        document.getElementById("new-quote").innerHTML = arr[i++];
        document.getElementById("author").innerHTML = arr1[i];
    }
}
