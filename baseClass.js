class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}


//class BaseClass {
//
//  constructor(x,y,width,height,angle){
//        var options={ 
//         isStatic:false,
//         'restitution':0.3,
//         'friction':0.5,
//         'density':1.2
//        }
//          this.body = Bodies.rectangle(x,y,width,height,options);
//         this.width = width;
//         this.height = height;
//         this.image = loadImage("images/white.png")
//         Matter.Body.setAngle(this.body, angle);
//         World.add(world, this.body);
//    }
//    display() {
//        var pos = this.body.position;
//        var angle = this.body.angle;
//        push();
//        translate(pos.x, pos.y);
//        rotate(angle);
//        imageMode(CENTER);
//        image(this.image,0,0,this.width,this.height)
//        pop();
//    }
//}


 //constructor(x,y,width,height,angle){
        //var options={ 
        //isStatic:false,
        //'restitution':0.3,
        //'friction':0.5,
        //'density':1.2
        //}

        //this.body=Bodies.rectangle(x, y, width, height, options);
        //this.width = width;
        //this.height = height;
        
        //this.image=loadImage("images/white.png")

        //Matter.Body.setAngle(this.body, angle);

        //World.add(world, this.body)
    //}

    //display(){
     //var pos = this.body.position;
     //var angle = this.body.angle;
     //push();
     //translate(pos.x, pos.y);
     //rotate(angle);
     //imageMode(CENTER);
     //fill("red");
     //image(this.image, pos.x, pos.y, this.width, this.height);
     //pop();
    //}