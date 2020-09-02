class Dustbin {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
         
      }
      
      this.body = Bodies.rectangle(1000, 400, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("mongo.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
            var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      fill(0);
      image(this.image,-100,-100 -this.width/3, 100);

     
      pop();
    }
  };
  