function preload(){

}

function setup(){
    canvas=createCanvas(800,700);
    canvas.position(300,300);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,800,700);
    fill(250,0,0);
    stroke(250,0,0);
    circle(50,50,80);
    circle(50,650,80);
    circle(650,50,80);
    circle(650,650,80);
    fill(0,250,0)
    stroke(0,250,0)
    rect(50,50,600,20)
    rect(50,650,20,-600)
    rect(650,50,20,620)
    rect(650,650,-600,20)
}