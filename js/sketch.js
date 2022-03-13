var stars = [];
var character;
var enemy;
var enemySpeedY = 1;
var myHeight;
var myWidth;
var score = 0;
var health = 3;
var numberOfCircles = 50;
var isGameOver = false;
var isHit = false;
var enemies = [];
var enemySpeeds = [];
function preload()
{
	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	myHeight = windowHeight;
	myWidth = windowWidth;
}

function setup()
{
	createCanvas(windowWidth, windowHeight);
	
	myHeight = windowHeight;
	myWidth = windowWidth;
	character = createSprite(myWidth/2,myHeight-67);
	//addEnemy();
	enemy = createSprite(myWidth+10, random(myHeight/2,myHeight-67));
	//console.log(enemy.position.y + ":" + (myWidth+10));
	enemy.addAnimation("run","./assets/enemy/sprite_0.png", "./assets/enemy/sprite_3.png");
	enemy.scale+=.5;
	enemies.push(enemy);
	enemySpeeds.push(random(1,5));
	character.addAnimation("run","./assets/character/sprite_0.png", "./assets/character/sprite_5.png");
}

function draw(){
	fullscreen();
	background(0,0,139);
	showCircles();
	
	for(let i=0; i < enemies.length; i++)
	{
		enemies[i].changeAnimation("run");
	
	}
	if(!isGameOver)
	{
		moveEnemy();
	}
	character.changeAnimation("run");

	fill(0);

	drawSprites();

	rect(0,myHeight-50,myWidth, 50);
	
	var hit = collideRectRect(0, myHeight-50, myWidth, 50, character.position.x, character.position.y, 32, 17);
	if(hit)
	{
		character.velocity.y = 0;
		character.position.y = myHeight-67;
	}	
	else
	{
		if(!isGameOver)
		character.velocity.y = 1;
	}

	for(let i = 0; i < enemies.length; i++)
	{
		var enemyHit = collideRectRect(enemies[i].position.x, enemies[i].position.y, 32, 32, character.position.x, character.position.y, 32, 32);
		if(enemyHit)
		{
			
			isHit = true;
			health-=1;
			if(health <= 0)
			{
				gameOver();
				health = 0;
			}
			else
			{
				
				character.position.y = -100;
			}
			
		}
	}
	

	textSize(24);
	text("Score: " + score, myWidth-150, 50);
	text("Health: " + health, myWidth-150, 100);
	
}

function addEnemy()
{
	enemy = createSprite(myWidth+10, random(myHeight/2,myHeight-67));

	enemy.addAnimation("run","./assets/enemy/sprite_0.png", "./assets/enemy/sprite_3.png");
	enemy.scale+=.5;
	enemies.push(enemy);
}
function showCircles()
{
	for(let i = 0; i < numberOfCircles; i++)
	{
		let circleObj = new mycircle(myWidth+50, floor(random(0,myHeight))-100, floor(random(10)+1), myWidth);
		stars.push(circleObj);
	}
	for(let i = 0; i < numberOfCircles; i++)
	{
		stars[i].updateCircle();
		stars[i].drawCircle();
		
	}
	for(let k = 0; k < stars.length; k++)
	{
		
		if(stars[k].getX() <=0)
		{
			stars.splice(k,1);
		}
	}
	
}
function gameOver()
{
	for(let i = 0; i < enemies.length; i++)
	{
		enemies[i].velocity.x = 0;
		enemies[i].velocity.y = 0;
		
	}
	character.velocity.x = 0;
	character.velocity.y = 0;
	numberOfCircles = 0;
	isGameOver = true;
	textSize(24);
	text("Game Over", myWidth/2-75, myHeight/2);


}
function moveEnemy()
{
	
	for(let i = 0; i < enemies.length; i++)
	{
			
		if(enemies[i].position.y >= myHeight-67 || enemies[i].position.y <= myHeight/2)
		{
			enemySpeeds[i] *= -1;
		}
		enemies[i].velocity.x = -1;
		enemies[i].velocity.y = enemySpeeds[i];
		
		if(enemies[i].position.x <= 0)
		{
			if(!isHit)
			{
				score+=1;
				if(score % 2 == 0)
				{
					addEnemy();
				}
				
			}
			isHit = false;
			for(let i = 0; i < enemies.length; i++)
			{
				enemySpeedY = floor(random(1,5));
				enemySpeeds[i] = enemySpeedY;
			}
			enemies[i].position.x = myWidth + 50;
			enemies[i].position.y = random(myHeight/2,myHeight-67);
			character.position.y = myHeight-67;
			character.position.x = myWidth/2;	
		}
	}
	
	
}

function mousePressed() {
	if(mouseX >= 0 && mouseX < 100)
	{
		character.velocity.x -=.5;
	}

	else if(mouseX <= myWidth && mouseX > myWidth-100)
	{
		character.velocity.x +=.5;
	}
	else if(mouseY <= myHeight && mouseY > myHeight-100)
	{
		
		if(character.position.y >= 200)
		{
			character.velocity.y -=20;
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
	if(!isGameOver)
	{
		character.velocity.y -= .5;
	}
}
