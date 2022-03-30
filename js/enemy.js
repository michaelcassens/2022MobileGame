class Enemy{

    constructor(w,h,speedX, speedY)
    {
        this.w = w;
        this.h = h;
        this.speedX = speedX;
        this.speedY = speedY;
       // this.enemy;
       // this.getAnimatedEnemy();
    }

    getAnimatedEnemy()
    {
        //console.log(this.w);
        //this.enemy = createSprite(this.w, this.h);
        //this.enemy.addAnimation("run", "../assets/enemy/sprite_0.png", "../assets/enemy/sprite_3.png");
        //this.enemy.scale += .5;
        
        //return this.enemy;
    }
    //getEnemy()
    //{
     //   return this.enemy;
   // }
    getW()
    {
        return this.w;
    }
    getH()
    {
        return this.h;
    }
    getSpeedX()
    {
        return this.speedX;
    }
    getSpeedY()
    {
        return this.speedY;
    }

    setSpeedX(speedx)
    {
        this.speedX = speedx;
    }

    setSpeedY(speedy)
    {
        this.speedY = speedy;
    }

}