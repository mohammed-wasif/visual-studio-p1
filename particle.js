class Particle {
    constructor(x,y,r) {
        var options = {
            restitution : 0.4
        }
        this.r=r;
        this.body= Bodies.circle(x,y,this.r,options)
        this.color= color(ranom(o,225),random(0,225),random(0,225))
        world.add(world,this.body);

    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
     

    push();
    translate(pos.x,pos.y);
    rotate(angle)
    noStroke();
    fill(this.color)
    ellipsemode(RADIUS);
    ellipse(0,0,this.r,this.r)
    pop(); 



    }
}