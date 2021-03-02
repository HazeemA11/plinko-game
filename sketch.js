const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var divisionheight=300;

function setup() {
  createCanvas(700,400);
  
  engine=Engine.create()
  world=engine.world
  createSprite(400, 200, 50, 50);
  ground=new Ground(240,780,480,20)
  division=new Division()



  if(frameCount%60===0){
particles.push(new Particle(random(width/2-10,width/2+10),10,10))

  }
  
  for(var k=0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionheight/2,10,divisionheight));
  
  }
  for(var j=40;j<=width;j=j+50){
  
    plinkos.push(new Plinkos(j,75))
  }
  
  for(var j=15;j<=width-10;j=j+50){
  
  plinkos.push(new Plinkos(j,175))
  
  }
  for(var j=15;j<=width-10;j=j+50){
  
  plinkos.push(new Plinkos(j,175))
  
  }
  
  for(var j=15;j<=width-10;j=j+50){
  
    plinkos.push(new Plinkos(j,175))
    
    }
  
  for (var j=0; j < particles.length; j++) {
  
  particle[j].display
  }
  for (var k=0; k < particles.length; k++) {
  
  particles[k].display
  }


}

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var ground;



function draw() {



  background(0);  
  drawSprites();


 



  ground.display()
  division.display()

}


