class Thread{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.Thread = Constraint.create(options);
        World.add(world, this.Thread);
    }

    fly (){
        this.Thread.bodyA=null;
    }

    display(){
        if (this.Thread.bodyA) {
            var pointA = this.Thread.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}

//class Thread {
//    constructor(bodyA,pointB) {
 //       var options = {
 //       bodyA: bodyA,
 //       pointB: pointB,
 //       stiffness:0.4,
//        length:10
//        }
//        this.pointB = pointB;
//        this.Thread = Constraint.create(options);
//        World.add(world, this.Thread);
//    }
//
//  fly() {
//      this.Thread.pointA = null
//  }
//
//    display() {
//    if(this.Thread.bodyA) {
//    var pointA = this.Thread.bodyA.position;
//    var pointB = this.pointB;
//    strokeWeight(4);
//    line(pointA.x,pointA.y, pointB.x,pointB.y);
//    }
//}
//}