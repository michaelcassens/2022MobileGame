var stars = [];
var character;
function preload()
{
	
}

function setup()
{
	createCanvas(displayWidth, displayHeight);
	character = createSprite(100,400);
	character.addAnimation("run","./assets/character/sprite_0.png", "./assets/character/sprite_5.png");
}

function draw(){
	background(0,0,139);
	for(let i = 0; i < 50; i++)
	{
		let circleObj = new mycircle(displayWidth+50, floor(random(0,displayHeight))-100, floor(random(10)+1), displayWidth);
		stars.push(circleObj);
	}
	for(let i = 0; i < 50; i++)
	{
		stars[i].updateCircle();
		stars[i].drawCircle();
	}
	if(keyIsPressed)
	{
		console.log("hi"+ key);
		if(key == "d")
		{
			character.velocity.x +=.5;
		}
		else if(key == "a")
		{
			character.velocity.x -=.5;
		}
		else if(key == "w")
		{
			character.velocity.y -=.5;
		}
		else if(key == "s")
		{
			character.velocity.y +=.5;
		}
		else if(key == "z")
		{
			character.scale +=.1;
		}
		else
		{
			character.velocity.x = 0;
			character.velocity.y = 0;
		}

	}
	else
		{
			character.velocity.x = 0;
			character.velocity.y = 0;
		}
	
    character.changeAnimation("run");

	drawSprites();
}
