document.addEventListener("DOMContentLoaded", function (){

    const textToSpeakInput = document.getElementById("textToSpeak");
    const speakButton = document.getElementById("speakButton");

    if('speechSynthesis' in window){
        const synth = window.speechSynthesis;

        speakButton.addEventListener("click", function(){
            const textToSpeak = textToSpeakInput.value;
            if(textToSpeak.trim() !== ""){
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                synth.speak(utterance);
            }

        });
    }else{
        alert("brower not supported, use chrome, edge or firedox");
    }




});