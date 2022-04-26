Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera= document.getElementById("camera");
Webcam.attach('#camera')

function snap() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='imagethatiscaptured' src="+data_uri+">"
    });
       
}
console.log(ml5.version);
imageClassifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/b5-uLB-Qv/model.json", modelloaded)

function modelloaded() {
    console.log("its ALIVE");
    speak()
}
prediction_1= ""
prediction_2= ""
function speak() {
    var synth= window.speechSynthesis;
    speakdata1= "The first prediction is"+prediction_1
    speakdata2= ". The second Prediction is "+prediction_2
    speakthis=    new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(speakthis);
}

