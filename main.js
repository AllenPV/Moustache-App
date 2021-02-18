function preload(){
    
}
function setup(){
    Canvas = createCanvas(300,300);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(300,300);
    Video.hide();
    poseNet = ml5.poseNet(Video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
     
function draw(){
    
}
function Take_Snapshot(){
    save("Photo");
}