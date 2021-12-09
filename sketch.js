const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5 ;

var rope1,rope2,rope3,rope4,rope5 ;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options= {
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	 
	bob_option={
		isStatic : true,
	} ;
	

	bob1 = Bodies.circle(314,255,40,bob_option) ;
	World.add(world,bob1) ;


	bob2 = Bodies.circle(355,255,40,bob_option) ;
	World.add(world,bob2) ;

	bob3 = Bodies.circle(395,255,40,bob_option) ;
	World.add(world,bob3) ;

	bob4 = Bodies.circle(435,255,40,bob_option) ;
	World.add(world,bob4) ;

	bob5 = Bodies.circle(476,255,40,bob_option) ;
	World.add(world,bob5) ;

	rope1 = new rope(bob1,roof,-80,0) ;
	World.add(world,rope1) ;

	
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

dispay() ;

keyPressed() ;
  
  //create ellipse shape for multiple bobs here

  ellipse(bob1.position.x , bob1.position.y,40) ;

  ellipse(bob2.position.x , bob2.position.y,40) ; 

  ellipse(bob3.position.x , bob3.position.y,40) ; 

  ellipse(bob4.position.x , bob4.position.y,40) ; 

  ellipse(bob5.position.x , bob5.position.y,40) ;
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed() {
if(keyCode == UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	  }
}