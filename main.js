x = 0;
y = 0;
draw_mango = "";
draw_apples = "";
var SpeechRecognition = winow.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System Is Listening Please Speak";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized as: " + content;

}