class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            // bodyB: bodyB.converting the bodyB into pointB
            pointB:pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    //writing the function for the bird to fly
    fly(){
        this.chain.bodyA=null;
        
    }

    attach(body){
        this.chain.bodyA=body;
    }

    display(){
        //This if and else condition is used so that the bird can fly when themouse button is released
        if(this.chain.bodyA==null){
        }
        else{
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }   
    }
    
}