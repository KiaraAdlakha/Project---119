function preload()
{

}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.position(750,300);
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
image(video,0,0,400,400);
classifier.classify(video,got_result);
}
console.log("ML5 Version:", ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1hTPrwxz0/model.json", modelLoaded);
function modelLoaded()
{
    console.log("model loaded");
}

function got_result(error,result)
{
if (error)
{
    console.error(error);
}
if (result)
{
 console.log(result);
 document.getElementById("family_member").innerHTML= result[0].label;
}
}