class Ball{
    constructor(x,y){
        this.x=x
        this.y=y
        this.r=20
        var options={
            restituition:0.4,
            density:1.0,
            friction:1.0,
            isStatic:true
        }
        this.body= Bodies.circle(x,y,this.r,options);
        this.image= loadImage("assets/cannonball.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position

        imageMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        image(this.image,0,0,this.r,this.r);
        pop();
        
    }

    shoot(){
        var velocity=p5.Vector.fromAngle(cannon.angle);
        console.log(velocity);
        velocity.mult(20);
        Body.setStatic(this.body,false);
        Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});
    }
}