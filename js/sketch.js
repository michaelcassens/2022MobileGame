var stars = [];
var character;
var enemy;
function preload()
{
	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup()
{
	createCanvas(windowWidth, windowHeight);
	character = createSprite(100,400);
	enemy = createSprite(windowWidth+100, windowHeight/2);
	enemy.addAnimation("run","./assets/enemy/sprite_0.png", "./assets/enemy/sprite_3.png");
	enemy.scale+=.5;
	character.addAnimation("run","./assets/character/sprite_0.png", "./assets/character/sprite_5.png");
}

function draw(){
	background(0,0,139);
	for(let i = 0; i < 50; i++)
	{
		let circleObj = new mycircle(windowWidth+50, floor(random(0,windowHeight))-100, floor(random(10)+1), windowWidth);
		stars.push(circleObj);
	}
	for(let i = 0; i < 50; i++)
	{
		stars[i].updateCircle();
		stars[i].drawCircle();
		if(stars[i].getX() <=0)
		{
			stars.splice(i,1);
		}
	}
	
	
	enemy.changeAnimation("run");
	enemy.velocity.x -=.01;
	
    character.changeAnimation("run");

	fill(0);

	

	drawSprites();

	rect(0,windowHeight-50,windowWidth, 50);
	
	var hit = collideRectRect(0, windowHeight-50, windowWidth, 50, character.position.x, character.position.y, 32, 17);
	if(hit)
	{
		character.velocity.y = 0;
		character.position.y = window.height-67;
	}	
	else
	{
		character.velocity.y += .5;
	}
}

function mousePressed() {
	if(mouseX >= 0 && mouseX < 100)
	{
		character.velocity.x -=.5;
	}

	else if(mouseX <= windowWidth && mouseX > windowWidth-100)
	{
		character.velocity.x +=.5;
	}
	else if(mouseY <= windowHeight && mouseY > windowHeight-100)
	{
		console.log(character.position.y)
		
		if(character.position.y >= 200)
		{
			character.velocity.y -=10;
		}
	}
	else if(mouseY >= 0 && mouseY < 100)
	{
		//character.velocity.y -=.5;
	}
	
	else
	{
		character.velocity.x = 0;
		character.velocity.y = 0;
	}
  }

  function mouseReleased()
  {
	character.velocity.x = 0;
	character.velocity.y -= .5;
  }
