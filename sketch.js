const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//criar corpo da bola
	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);
	
	//criar chão e paredes


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

//desenhar bola na tela


  
}

//criar função para aplicar força na bola
