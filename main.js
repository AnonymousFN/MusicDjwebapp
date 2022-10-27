 var rightwristX=0
 var leftwristX=0
var leftwristY=0
var rightwristY=0
var leftwristscore=0
var rightwristscore=0
 function preload(){
sound1=loadSound("music.mp3")
sound2=loadSound("music2.mp3")
 }
    
function setup(){
canvas=createCanvas(800,400)
canvas.position(500,100)
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on(pose,gotPoses)
}
function modelLoaded(){
console.log("Posenet is intialized")
}
function gotPoses(result){
if(result.length > 0){
console.log(result)
rightwristX=result[0].pose.rightWrist.x
rightwristY=result[0].pose.rightWrist.y
leftwristX=result[0].pose.leftWrist.x
leftwristY=result[0].pose.leftWrist.y
leftwristscore=result[0].pose.keypoints[9].score
rightwristscore=result[0].pose.keypoints[10].score
}
}

function draw(){
image(video,0,0,800,400)
if (leftwristscore > 0.002){
stroke("yellow")
fill("red")
circle(leftwristX,leftwristY,20)
sound2.stop()
status1=sound2.isPlaying()
 if(status1==false){
sound1.play()

}

 

}
else if(rightwristscore > 0.002){
stroke("red")
fill("blue")
circle(rightwristX,rightwristY,20)
sound1.stop()
status2=sound1.isPlaying()
if(status2==false){
sound2.play()
}


}
}
