
function setup(){
createCanvas(600,400);
background(0); 
}
function draw(){
fill(0);
stroke(255,0,0);
strokeWeight(10);

triangle(260,240,300,160,340,240);

circle(150,200,80);

rect(410,160,80,80);
}


function setup(){
createCanvas(600,400);
background(220);
}
function draw(){
for( let i =0; i<10; i++){
fill(0 +i*50);
circle(30*i+20,30 +i*20,20);
}

}


