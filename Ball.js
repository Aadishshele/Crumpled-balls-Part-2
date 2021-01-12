class Ball {
    constructor(x,y,r){
        var options={
            restitution : 0,
            friction : 0.5,
            density : 1.2,
            isStatic : false
        }
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("Sprites/paperb.png")
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        //stroke("blue")
        //ellipse(0,0,this.r,)
        imageMode(CENTER)
        image(this.image,0,0,50,50)
        pop()
            
    }
}