song1="";
song2="";

function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}

leftWristX=0;
laftWristY=0;
rightWristX=0;
rightWristY=0;



function setup(){
canvas=createCanvas(300,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLaoded);
poseNet.on('pose',gotPoses);
}

function modelLaoded(){
    console.log("modelIsLoaded");
}

function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    }
}


function draw(){
image(video,0,0,300,400);
}

function play(){
    song2.play();
}