                                                                                                                                      var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX= 4;
  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites()
  ball.bounceOff(edges[0]);
 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  if(ball.bounceOff(paddle)){
  explosion();
  }
  
  paddle.bounceOff(edges);
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY= -6;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY= 6;
  }
  
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

