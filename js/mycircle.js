class mycircle
{
    constructor(x, y, diameter, w)
    {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.w = w;
        this.speed = random(1,10);
        this.alpha = random(100,255);
    }

    drawCircle()
    {
        noStroke();
        fill(this.alpha);
        circle(this.x, this.y, this.diameter);
    }

    updateCircle()
    {
        this.x -= this.speed;
        if(this.x <= 0)
        {
            this.x = this.w + 100;
        }
    }
}