// prompt("Give me your number")
// var username  = prompt("Give me your number")
// alert("this script working " +username)

var btnTranslator = document.querySelector("#btn-translator");
 //referencing the button using id (queryselector)
var input = document.querySelector("#input");
var output = document.querySelector("#output");

var serverurl = "https://api.funtranslations.com/translate/minion.json"

function getTranslateUrl(Text){
    return serverurl + "?" + "text=" + Text
}

function errorhandler(error){
    alert("something went wrong with server!!. Please try again later.");
}


function cliclEventListener(){
var Inputtext = input.value; //taking input

//calling server for proccessing 
fetch(getTranslateUrl(Inputtext))
     .then(response => response.json())
     .then(json => {
         var translatedText = json.contents.translated;
         output.innerText = translatedText;
     })
      .catch(errorhandler)
};

btnTranslator.addEventListener("click", cliclEventListener )