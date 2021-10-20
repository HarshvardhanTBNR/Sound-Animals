//https://teachablemachine.withgoogle.com/models/3hU29Kpid/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3hU29Kpid/model.json',modelReady)
    }
    function modelReady(){
    console.log("model loaded");
    classifier.classify(gotResults)
    }
    function gotResults(error,results){
    console.log("got result")
    }